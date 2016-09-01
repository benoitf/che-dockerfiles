package org.eclipse.che.plugin.typescript.dto;

import com.google.gson.internal.Primitives;

import org.eclipse.che.dto.shared.DTO;
import org.eclipse.che.dto.shared.DelegateTo;
import org.reflections.Reflections;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.scanners.TypeAnnotationsScanner;
import org.reflections.util.ConfigurationBuilder;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.reflections.util.ClasspathHelper.forClassLoader;

public class TypescriptDtoGenerator {


    public static void main(String[] args) {
        TypescriptDtoGenerator generator = new TypescriptDtoGenerator();

        generator.generate();
    }

    public void generate() {

        // keep only interfaces
        Reflections reflections = new Reflections(
                new ConfigurationBuilder().setUrls(forClassLoader()).setScanners(new SubTypesScanner(), new TypeAnnotationsScanner()));
        List<Class<?>> annotatedWithDtos = new ArrayList<>(reflections.getTypesAnnotatedWith(DTO.class));
        List<Class<?>> interfacesDtos = annotatedWithDtos.stream()
                                                         .filter(clazz -> clazz.isInterface() /*&& clazz.getSimpleName().startsWith("WorkspaceDto")*/)
                                                         .collect(Collectors.toList());

        System.out.println("dto " + interfacesDtos);

        interfacesDtos.stream().forEach((dto) -> generateDto(dto));


    }


    protected void generateDto(Class<?> dto) {

        // need to write interface and its implementation
        // first write interface
        System.out.println(writeInterface(dto));

        // write implem of this interface

        System.out.println(writeImplementation(dto));


    }


    /** Check is specified method is DTO getter. */
    protected boolean isDtoGetter(Method method) {
        if (method.isAnnotationPresent(DelegateTo.class)) {
            return false;
        }
        String methodName = method.getName();
        if ((methodName.startsWith("get") || methodName.startsWith("is")) && method.getParameterTypes().length == 0) {
            if (methodName.length() > 2 && methodName.startsWith("is")) {
                return method.getReturnType() == Boolean.class || method.getReturnType() == boolean.class;
            }
            return methodName.length() > 3;
        }
        return false;
    }


    /** Check is specified method is DTO setter. */
    protected boolean isDtoSetter(Method method) {
        if (method.isAnnotationPresent(DelegateTo.class)) {
            return false;
        }
        String methodName = method.getName();
        return methodName.startsWith("set")  && method.getParameterTypes().length == 1;
    }

    /** Check is specified method is DTO with. */
    protected boolean isDtoWith(Method method) {
        if (method.isAnnotationPresent(DelegateTo.class)) {
            return false;
        }
        String methodName = method.getName();
        return methodName.startsWith("with")  && method.getParameterTypes().length == 1;
    }


    protected String getGetterFieldName(Method method) {
        String methodName = method.getName();
        if (methodName.startsWith("get")) {
            return getFieldName(methodName.substring(3));
        } else if (methodName.startsWith("is")) {
            return getFieldName(methodName.substring(2));
        }
        throw new IllegalArgumentException("Invalid getter method" + method.getName());
    }

    protected String getSetterFieldName(Method method) {
        String methodName = method.getName();
        if (methodName.startsWith("set")) {
            return getFieldName(methodName.substring(3));
        }
        throw new IllegalArgumentException("Invalid setter method" + method.getName());
    }

    protected String getWithFieldName(Method method) {
        String methodName = method.getName();
        if (methodName.startsWith("with")) {
            return getFieldName(methodName.substring(4));
        }
        throw new IllegalArgumentException("Invalid with method" + method.getName());
    }

    protected String writeInterface(Class<?> interfaceDto) {
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("export module " + interfaceDto.getPackage().getName() + " {\n");

        stringBuilder.append("export interface " + interfaceDto.getSimpleName());

        // FIXME: extending other interfaces ?

        stringBuilder.append(" {\n");

        // now for each method, write it
        Arrays.asList(interfaceDto.getMethods()).stream()
              .filter((method) -> !method.isBridge() && (isDtoGetter(method) || isDtoSetter(method) || isDtoWith(method)))
              .forEach((method) -> {


                  // add method name
                  stringBuilder.append(method.getName() + "(");

                  // add parameters
                  IntStream.range(0, method.getGenericParameterTypes().length).forEach((i) -> {
                      if (i > 0) {
                          stringBuilder.append(", ");
                      }
                      stringBuilder.append("arg" + i + " : " + convertType(method.getGenericParameterTypes()[i]));
                  });

                  // add return type
                  stringBuilder.append("): " + convertType(method.getGenericReturnType()) + ";\n");
              });


        stringBuilder.append("}\n");
        stringBuilder.append("}\n");

        return stringBuilder.toString();
    }


    String getFieldName(String type) {
        char c[] = type.toCharArray();
        c[0] = Character.toLowerCase(c[0]);
        return new String(c);
    }

    protected String writeImplementation(Class<?> interfaceDto) {
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("export module " + interfaceDto.getPackage().getName() + " {\n");

        stringBuilder.append("export class " + interfaceDto.getSimpleName() + "Impl implements " + interfaceDto.getName() );

        stringBuilder.append(" {\n");

        Map<String, Type> fieldAttributes = new HashMap<>();

        // now for each method, write it
        Arrays.asList(interfaceDto.getMethods()).stream()
              .filter((method) -> !method.isBridge())
              .forEach((method) -> {

                  if (isDtoGetter(method)) {
                      // add get method name
                      stringBuilder.append(method.getName() + "() ");

                      Type fieldType = method.getGenericReturnType();
                      String fieldName = getGetterFieldName(method);
                      fieldAttributes.put(fieldName, fieldType);

                      // add return type
                      stringBuilder.append(": " + convertType(fieldType) + " {\n");

                      // add body
                      stringBuilder.append("return this." + fieldName + ";\n");

                      // close method
                      stringBuilder.append("} " + "\n");

                  } else if (isDtoSetter(method)) {

                      // add setter method name
                      stringBuilder.append(method.getName() + "(");

                      // add the parameter
                      Type fieldType = method.getGenericParameterTypes()[0];
                      String fieldName = getSetterFieldName(method);
                      stringBuilder.append(fieldName + ":" + convertType(fieldType) + ") : void {\n");

                      fieldAttributes.put(fieldName, fieldType);

                      // add body
                      stringBuilder.append("this." + fieldName + "=" + fieldName + ";\n");

                      // close method
                      stringBuilder.append("} " + "\n");


                  } else if (isDtoWith(method)) {

                      // add with method name
                      stringBuilder.append(method.getName() + "(");

                      // add the parameter
                      Type fieldType = method.getGenericParameterTypes()[0];
                      String fieldName = getWithFieldName(method);
                      stringBuilder.append(fieldName + ":" + convertType(fieldType) + ") : " + convertType(method.getGenericReturnType()) + " {\n");

                      fieldAttributes.put(fieldName, fieldType);

                      // add body
                      stringBuilder.append("this." + fieldName + "=" + fieldName + ";\n");
                      stringBuilder.append("return this;\n");

                      // close method
                      stringBuilder.append("} " + "\n");
                  }

              });

        // write class attributes
        fieldAttributes.entrySet().stream().forEach((field)-> {
            stringBuilder.append(field.getKey() + ":" + convertType(field.getValue()) + ";\n");
        });

        // write custom field
        stringBuilder.append("__jsonObject : any;\n");


        // write constructor
        stringBuilder.append("constructor(__jsonObject?: any) {\n");

        // keep this json object
        stringBuilder.append("if (__jsonObject) {\nthis.__jsonObject = __jsonObject;\n}\n");


        // for each array, initialize it
        fieldAttributes.entrySet().stream().forEach((field)-> {
            Type fieldType = field.getValue();
            String fieldName = field.getKey();
            String typeName = convertType(fieldType);

            if (typeName.startsWith("Array<") || typeName.startsWith("Map<")) {
                stringBuilder.append("this." + fieldName + " = new ");
                stringBuilder.append(typeName  + "();\n");
            }

            stringBuilder.append("if (__jsonObject." + fieldName + ") {\n");
            // now, for each field, try to see if there is a matching property in the json Object
            if (fieldType instanceof ParameterizedType) {
                ParameterizedType parameterizedType = (ParameterizedType)fieldType;
                Type rawType = parameterizedType.getRawType();

                if (List.class.equals(rawType)) {
                    // we have an array, will loop
                    stringBuilder.append("__jsonObject." + fieldName + ".forEach((item) => {\n");
                    if (parameterizedType.getActualTypeArguments()[0] instanceof Class &&
                        ((Class)parameterizedType.getActualTypeArguments()[0]).isAnnotationPresent(DTO.class)) {
                        stringBuilder
                                .append("this." + fieldName + ".push(" + "new " +
                                        convertType(parameterizedType.getActualTypeArguments()[0]) +
                                        "Impl(item));\n");
                    } else {
                        stringBuilder
                                .append("this." + fieldName + ".push(item);\n");

                    }
                    stringBuilder.append("});\n");
                } else if (Map.class.equals(rawType)) {
                    stringBuilder.append("let tmp : Array<any> = Object.keys(__jsonObject." + fieldName + ");\n");
                    stringBuilder.append("tmp.forEach((key) => { this." + fieldName + ".set(key, " + "__jsonObject." + fieldName + "[key]);});");


                }
            } else if (Primitives.isPrimitive(fieldType) || Primitives.isWrapperType(fieldType) || String.class.equals(fieldType)) {
                stringBuilder.append("this." + fieldName + " = __jsonObject." + fieldName);
            } else if (fieldType instanceof Class && ((Class) fieldType).isAnnotationPresent(DTO.class)) {
                stringBuilder.append("this." + fieldName + " = new " + fieldType.getTypeName() + "Impl(__jsonObject." + fieldName +");\n");
            }

            stringBuilder.append("}\n");




            /*
            if (__jsonObject.links) {
                __jsonObject.links.forEach((link) -> {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(link));
                })
            }
            if (__jsonObject.creationDate) {
                this.creationDate = __jsonObject.creationDate;
            }*/
        });



        stringBuilder.append("}\n");






        stringBuilder.append("}\n");
        stringBuilder.append("}\n");

        return stringBuilder.toString();
    }


    protected String convertType(Type type) {
        if (type instanceof ParameterizedType) {
            ParameterizedType parameterizedType = (ParameterizedType)type;
            Type rawType = parameterizedType.getRawType();

            if (List.class.equals(rawType)) {
                return "Array<" + convertType(parameterizedType.getActualTypeArguments()[0]) + ">";
            } else if (Map.class.equals(rawType)) {
                return "Map<" + convertType(parameterizedType.getActualTypeArguments()[0]) + "," + convertType(parameterizedType.getActualTypeArguments()[1]) + ">";
            } else {
                throw new IllegalArgumentException("Invalid type" + type);
            }
        }

        if (String.class.equals(type)) {
            return "string";
        } else if (Integer.class.equals(type) || Integer.TYPE.equals(type)) {
            return "number";
        } else if (Long.class.equals(type) || Long.TYPE.equals(type)) {
            return "number";
        } else if (Boolean.class.equals(type)) {
            return "boolean";
        } else if (type instanceof Class && ((Class)type).isEnum()) {
            //FIXME enum type
            return "string";
        }

        return type.getTypeName();
    }

}


