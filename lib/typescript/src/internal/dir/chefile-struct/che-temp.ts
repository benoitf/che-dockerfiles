export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineDto {
        getRuntime(): org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto;
        withId(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineDto;
        withWorkspaceId(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineDto;
        getConfig(): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        withConfig(arg0 : org.eclipse.che.api.machine.shared.dto.MachineConfigDto): org.eclipse.che.api.machine.shared.dto.MachineDto;
        withRuntime(arg0 : org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto): org.eclipse.che.api.machine.shared.dto.MachineDto;
        withStatus(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.machine.shared.dto.MachineDto;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        withEnvName(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineDto;
        withOwner(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineDto;
        getId(): string;
        getOwner(): string;
        getWorkspaceId(): string;
        getStatus(): string;
        getEnvName(): string;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineDto {
        getRuntime() : org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto {
            return this.runtime;
        }
        withId(id:string) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.id=id;
            return this;
        }
        withWorkspaceId(workspaceId:string) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.workspaceId=workspaceId;
            return this;
        }
        getConfig() : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            return this.config;
        }
        withConfig(config:org.eclipse.che.api.machine.shared.dto.MachineConfigDto) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.config=config;
            return this;
        }
        withRuntime(runtime:org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.runtime=runtime;
            return this;
        }
        withStatus(status:string) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.status=status;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.links=links;
            return this;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        withEnvName(envName:string) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.envName=envName;
            return this;
        }
        withOwner(owner:string) : org.eclipse.che.api.machine.shared.dto.MachineDto {
            this.owner=owner;
            return this;
        }
        getId() : string {
            return this.id;
        }
        getOwner() : string {
            return this.owner;
        }
        getWorkspaceId() : string {
            return this.workspaceId;
        }
        getStatus() : string {
            return this.status;
        }
        getEnvName() : string {
            return this.envName;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        owner:string;
        envName:string;
        runtime:org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        id:string;
        config:org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        workspaceId:string;
        status:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.owner) {
                this.owner = __jsonObject.owner}
            if (__jsonObject.envName) {
                this.envName = __jsonObject.envName}
            if (__jsonObject.runtime) {
                this.runtime = new org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDtoImpl(__jsonObject.runtime);
            }
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.config) {
                this.config = new org.eclipse.che.api.machine.shared.dto.MachineConfigDtoImpl(__jsonObject.config);
            }
            if (__jsonObject.workspaceId) {
                this.workspaceId = __jsonObject.workspaceId}
            if (__jsonObject.status) {
            }
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface ServiceDescriptor {
        setHref(arg0 : string): void;
        withHref(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor;
        setDescription(arg0 : string): void;
        getHref(): string;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor;
        withVersion(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor;
        getVersion(): string;
        setVersion(arg0 : string): void;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class ServiceDescriptorImpl implements org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor {
        setHref(href:string) : void {
            this.href=href;
        }
        withHref(href:string) : org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor {
            this.href=href;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        getHref() : string {
            return this.href;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor {
            this.description=description;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor {
            this.links=links;
            return this;
        }
        withVersion(version:string) : org.eclipse.che.api.core.rest.shared.dto.ServiceDescriptor {
            this.version=version;
            return this;
        }
        getVersion() : string {
            return this.version;
        }
        setVersion(version:string) : void {
            this.version=version;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        description:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        href:string;
        version:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.href) {
                this.href = __jsonObject.href}
            if (__jsonObject.version) {
                this.version = __jsonObject.version}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface ProjectConfigDto {
        getName(): string;
        setName(arg0 : string): void;
        getType(): string;
        getPath(): string;
        getAttributes(): Map<string,Array<string>>;
        setType(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        withType(arg0 : string): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        setDescription(arg0 : string): void;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        setAttributes(arg0 : Map<string,Array<string>>): void;
        withAttributes(arg0 : Map<string,Array<string>>): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        withPath(arg0 : string): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        setPath(arg0 : string): void;
        setSource(arg0 : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto): void;
        withSource(arg0 : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        getSource(): org.eclipse.che.api.workspace.shared.dto.SourceStorageDto;
        getProblems(): Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>;
        setProblems(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>): void;
        withMixins(arg0 : Array<string>): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
        setMixins(arg0 : Array<string>): void;
        getMixins(): Array<string>;
        withProblems(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>): org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class ProjectConfigDtoImpl implements org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
        getName() : string {
            return this.name;
        }
        setName(name:string) : void {
            this.name=name;
        }
        getType() : string {
            return this.type;
        }
        getPath() : string {
            return this.path;
        }
        getAttributes() : Map<string,Array<string>> {
            return this.attributes;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withName(name:string) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.description=description;
            return this;
        }
        setAttributes(attributes:Map<string,Array<string>>) : void {
            this.attributes=attributes;
        }
        withAttributes(attributes:Map<string,Array<string>>) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.attributes=attributes;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.links=links;
            return this;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        withPath(path:string) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.path=path;
            return this;
        }
        setPath(path:string) : void {
            this.path=path;
        }
        setSource(source:org.eclipse.che.api.workspace.shared.dto.SourceStorageDto) : void {
            this.source=source;
        }
        withSource(source:org.eclipse.che.api.workspace.shared.dto.SourceStorageDto) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.source=source;
            return this;
        }
        getSource() : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto {
            return this.source;
        }
        getProblems() : Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto> {
            return this.problems;
        }
        setProblems(problems:Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>) : void {
            this.problems=problems;
        }
        withMixins(mixins:Array<string>) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.mixins=mixins;
            return this;
        }
        setMixins(mixins:Array<string>) : void {
            this.mixins=mixins;
        }
        getMixins() : Array<string> {
            return this.mixins;
        }
        withProblems(problems:Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>) : org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto {
            this.problems=problems;
            return this;
        }
        path:string;
        mixins:Array<string>;
        name:string;
        description:string;
        attributes:Map<string,Array<string>>;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        source:org.eclipse.che.api.workspace.shared.dto.SourceStorageDto;
        type:string;
        problems:Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.path) {
                this.path = __jsonObject.path}
            this.mixins = new Array<string>();
            if (__jsonObject.mixins) {
                __jsonObject.mixins.forEach((item) => {
                    this.mixins.push(item);
                });
            }
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.attributes = new Map<string,Array<string>>();
            if (__jsonObject.attributes) {
                let tmp : Array<any> = Object.keys(__jsonObject.attributes);
                tmp.forEach((key) => { this.attributes.set(key, __jsonObject.attributes[key]);});}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.source) {
                this.source = new org.eclipse.che.api.workspace.shared.dto.SourceStorageDtoImpl(__jsonObject.source);
            }
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            this.problems = new Array<org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto>();
            if (__jsonObject.problems) {
                __jsonObject.problems.forEach((item) => {
                    this.problems.push(new org.eclipse.che.api.workspace.shared.dto.ProjectProblemDtoImpl(item));
                });
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.event {
    export interface MachineStatusEvent {
        setError(arg0 : string): void;
        setDev(arg0 : boolean): void;
        isDev(): boolean;
        withDev(arg0 : boolean): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        withError(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        getWorkspaceId(): string;
        withWorkspaceId(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        getMachineName(): string;
        withMachineName(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        setEventType(arg0 : string): void;
        withEventType(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        getError(): string;
        getMachineId(): string;
        setMachineId(arg0 : string): void;
        withMachineId(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent;
        getEventType(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.event {
    export class MachineStatusEventImpl implements org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
        setError(error:string) : void {
            this.error=error;
        }
        setDev(dev:boolean) : void {
            this.dev=dev;
        }
        isDev() : boolean {
            return this.dev;
        }
        withDev(dev:boolean) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.dev=dev;
            return this;
        }
        withError(error:string) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.error=error;
            return this;
        }
        getWorkspaceId() : string {
            return this.workspaceId;
        }
        withWorkspaceId(workspaceId:string) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.workspaceId=workspaceId;
            return this;
        }
        getMachineName() : string {
            return this.machineName;
        }
        withMachineName(machineName:string) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.machineName=machineName;
            return this;
        }
        setEventType(eventType:string) : void {
            this.eventType=eventType;
        }
        withEventType(eventType:string) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.eventType=eventType;
            return this;
        }
        getError() : string {
            return this.error;
        }
        getMachineId() : string {
            return this.machineId;
        }
        setMachineId(machineId:string) : void {
            this.machineId=machineId;
        }
        withMachineId(machineId:string) : org.eclipse.che.api.machine.shared.dto.event.MachineStatusEvent {
            this.machineId=machineId;
            return this;
        }
        getEventType() : string {
            return this.eventType;
        }
        machineId:string;
        dev:boolean;
        eventType:string;
        error:string;
        machineName:string;
        workspaceId:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.machineId) {
                this.machineId = __jsonObject.machineId}
            if (__jsonObject.dev) {
                this.dev = __jsonObject.dev}
            if (__jsonObject.eventType) {
            }
            if (__jsonObject.error) {
                this.error = __jsonObject.error}
            if (__jsonObject.machineName) {
                this.machineName = __jsonObject.machineName}
            if (__jsonObject.workspaceId) {
                this.workspaceId = __jsonObject.workspaceId}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface LimitsDto {
        withRam(arg0 : number): org.eclipse.che.api.machine.shared.dto.LimitsDto;
        getRam(): number;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class LimitsDtoImpl implements org.eclipse.che.api.machine.shared.dto.LimitsDto {
        withRam(ram:number) : org.eclipse.che.api.machine.shared.dto.LimitsDto {
            this.ram=ram;
            return this;
        }
        getRam() : number {
            return this.ram;
        }
        ram:number;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.ram) {
                this.ram = __jsonObject.ram}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto.event {
    export interface WorkspaceStatusEvent {
        setError(arg0 : string): void;
        withError(arg0 : string): org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent;
        getWorkspaceId(): string;
        withWorkspaceId(arg0 : string): org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent;
        setEventType(arg0 : string): void;
        withEventType(arg0 : string): org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent;
        getError(): string;
        getEventType(): string;
        setWorkspaceId(arg0 : string): void;
    }
}

export module org.eclipse.che.api.workspace.shared.dto.event {
    export class WorkspaceStatusEventImpl implements org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent {
        setError(error:string) : void {
            this.error=error;
        }
        withError(error:string) : org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent {
            this.error=error;
            return this;
        }
        getWorkspaceId() : string {
            return this.workspaceId;
        }
        withWorkspaceId(workspaceId:string) : org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent {
            this.workspaceId=workspaceId;
            return this;
        }
        setEventType(eventType:string) : void {
            this.eventType=eventType;
        }
        withEventType(eventType:string) : org.eclipse.che.api.workspace.shared.dto.event.WorkspaceStatusEvent {
            this.eventType=eventType;
            return this;
        }
        getError() : string {
            return this.error;
        }
        getEventType() : string {
            return this.eventType;
        }
        setWorkspaceId(workspaceId:string) : void {
            this.workspaceId=workspaceId;
        }
        eventType:string;
        error:string;
        workspaceId:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.eventType) {
            }
            if (__jsonObject.error) {
                this.error = __jsonObject.error}
            if (__jsonObject.workspaceId) {
                this.workspaceId = __jsonObject.workspaceId}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface RecipeDto {
        getType(): string;
        getScript(): string;
        setType(arg0 : string): void;
        withType(arg0 : string): org.eclipse.che.api.workspace.shared.dto.RecipeDto;
        withScript(arg0 : string): org.eclipse.che.api.workspace.shared.dto.RecipeDto;
        setScript(arg0 : string): void;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class RecipeDtoImpl implements org.eclipse.che.api.workspace.shared.dto.RecipeDto {
        getType() : string {
            return this.type;
        }
        getScript() : string {
            return this.script;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withType(type:string) : org.eclipse.che.api.workspace.shared.dto.RecipeDto {
            this.type=type;
            return this;
        }
        withScript(script:string) : org.eclipse.che.api.workspace.shared.dto.RecipeDto {
            this.script=script;
            return this;
        }
        setScript(script:string) : void {
            this.script=script;
        }
        type:string;
        script:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.script) {
                this.script = __jsonObject.script}
        }
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export interface JsonRpcRequest {
        getMethod(): string;
        getId(): number;
        withId(arg0 : number): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest;
        withMethod(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest;
        withJsonrpc(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest;
        getJsonrpc(): string;
        withParams(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest;
        getParams(): string;
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export class JsonRpcRequestImpl implements org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest {
        getMethod() : string {
            return this.method;
        }
        getId() : number {
            return this.id;
        }
        withId(id:number) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest {
            this.id=id;
            return this;
        }
        withMethod(method:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest {
            this.method=method;
            return this;
        }
        withJsonrpc(jsonrpc:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest {
            this.jsonrpc=jsonrpc;
            return this;
        }
        getJsonrpc() : string {
            return this.jsonrpc;
        }
        withParams(params:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcRequest {
            this.params=params;
            return this;
        }
        getParams() : string {
            return this.params;
        }
        method:string;
        id:number;
        jsonrpc:string;
        params:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.method) {
                this.method = __jsonObject.method}
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.jsonrpc) {
                this.jsonrpc = __jsonObject.jsonrpc}
            if (__jsonObject.params) {
                this.params = __jsonObject.params}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface CommandDto {
        getName(): string;
        setName(arg0 : string): void;
        getType(): string;
        getAttributes(): Map<string,string>;
        setType(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.CommandDto;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.CommandDto;
        withCommandLine(arg0 : string): org.eclipse.che.api.machine.shared.dto.CommandDto;
        setAttributes(arg0 : Map<string,string>): void;
        withAttributes(arg0 : Map<string,string>): org.eclipse.che.api.machine.shared.dto.CommandDto;
        setCommandLine(arg0 : string): void;
        getCommandLine(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class CommandDtoImpl implements org.eclipse.che.api.machine.shared.dto.CommandDto {
        getName() : string {
            return this.name;
        }
        setName(name:string) : void {
            this.name=name;
        }
        getType() : string {
            return this.type;
        }
        getAttributes() : Map<string,string> {
            return this.attributes;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.CommandDto {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.CommandDto {
            this.type=type;
            return this;
        }
        withCommandLine(commandLine:string) : org.eclipse.che.api.machine.shared.dto.CommandDto {
            this.commandLine=commandLine;
            return this;
        }
        setAttributes(attributes:Map<string,string>) : void {
            this.attributes=attributes;
        }
        withAttributes(attributes:Map<string,string>) : org.eclipse.che.api.machine.shared.dto.CommandDto {
            this.attributes=attributes;
            return this;
        }
        setCommandLine(commandLine:string) : void {
            this.commandLine=commandLine;
        }
        getCommandLine() : string {
            return this.commandLine;
        }
        name:string;
        attributes:Map<string,string>;
        type:string;
        commandLine:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            this.attributes = new Map<string,string>();
            if (__jsonObject.attributes) {
                let tmp : Array<any> = Object.keys(__jsonObject.attributes);
                tmp.forEach((key) => { this.attributes.set(key, __jsonObject.attributes[key]);});}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.commandLine) {
                this.commandLine = __jsonObject.commandLine}
        }
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export interface JsonRpcError {
        getMessage(): string;
        getCode(): number;
        withData(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError;
        withCode(arg0 : number): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError;
        withMessage(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError;
        getData(): string;
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export class JsonRpcErrorImpl implements org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError {
        getMessage() : string {
            return this.message;
        }
        getCode() : number {
            return this.code;
        }
        withData(data:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError {
            this.data=data;
            return this;
        }
        withCode(code:number) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError {
            this.code=code;
            return this;
        }
        withMessage(message:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError {
            this.message=message;
            return this;
        }
        getData() : string {
            return this.data;
        }
        code:number;
        data:string;
        message:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.code) {
                this.code = __jsonObject.code}
            if (__jsonObject.data) {
                this.data = __jsonObject.data}
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export interface RecipeDescriptor {
        setName(arg0 : string): void;
        setType(arg0 : string): void;
        withId(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        withTags(arg0 : Array<string>): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        setTags(arg0 : Array<string>): void;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        setDescription(arg0 : string): void;
        withScript(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        setScript(arg0 : string): void;
        setId(arg0 : string): void;
        withDescription(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        setCreator(arg0 : string): void;
        withCreator(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.core.rest.shared.dto.Hyperlinks;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        getName(): string;
        getId(): string;
        getCreator(): string;
        getTags(): Array<string>;
        getDescription(): string;
        getType(): string;
        getScript(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export class RecipeDescriptorImpl implements org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
        setName(name:string) : void {
            this.name=name;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withId(id:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.id=id;
            return this;
        }
        withTags(tags:Array<string>) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.tags=tags;
            return this;
        }
        setTags(tags:Array<string>) : void {
            this.tags=tags;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        withScript(script:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.script=script;
            return this;
        }
        setScript(script:string) : void {
            this.script=script;
        }
        setId(id:string) : void {
            this.id=id;
        }
        withDescription(description:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.description=description;
            return this;
        }
        setCreator(creator:string) : void {
            this.creator=creator;
        }
        withCreator(creator:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeDescriptor {
            this.creator=creator;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.core.rest.shared.dto.Hyperlinks {
            this.links=links;
            return this;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        getName() : string {
            return this.name;
        }
        getId() : string {
            return this.id;
        }
        getCreator() : string {
            return this.creator;
        }
        getTags() : Array<string> {
            return this.tags;
        }
        getDescription() : string {
            return this.description;
        }
        getType() : string {
            return this.type;
        }
        getScript() : string {
            return this.script;
        }
        creator:string;
        name:string;
        description:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        id:string;
        type:string;
        script:string;
        tags:Array<string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.creator) {
                this.creator = __jsonObject.creator}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.script) {
                this.script = __jsonObject.script}
            this.tags = new Array<string>();
            if (__jsonObject.tags) {
                __jsonObject.tags.forEach((item) => {
                    this.tags.push(item);
                });
            }
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface EnvironmentDto {
        setName(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.workspace.shared.dto.EnvironmentDto;
        getRecipe(): org.eclipse.che.api.workspace.shared.dto.RecipeDto;
        setRecipe(arg0 : org.eclipse.che.api.workspace.shared.dto.RecipeDto): void;
        withRecipe(arg0 : org.eclipse.che.api.workspace.shared.dto.RecipeDto): org.eclipse.che.api.workspace.shared.dto.EnvironmentDto;
        getMachineConfigs(): Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>;
        withMachineConfigs(arg0 : Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>): org.eclipse.che.api.workspace.shared.dto.EnvironmentDto;
        setMachineConfigs(arg0 : Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>): void;
        getName(): string;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class EnvironmentDtoImpl implements org.eclipse.che.api.workspace.shared.dto.EnvironmentDto {
        setName(name:string) : void {
            this.name=name;
        }
        withName(name:string) : org.eclipse.che.api.workspace.shared.dto.EnvironmentDto {
            this.name=name;
            return this;
        }
        getRecipe() : org.eclipse.che.api.workspace.shared.dto.RecipeDto {
            return this.recipe;
        }
        setRecipe(recipe:org.eclipse.che.api.workspace.shared.dto.RecipeDto) : void {
            this.recipe=recipe;
        }
        withRecipe(recipe:org.eclipse.che.api.workspace.shared.dto.RecipeDto) : org.eclipse.che.api.workspace.shared.dto.EnvironmentDto {
            this.recipe=recipe;
            return this;
        }
        getMachineConfigs() : Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto> {
            return this.machineConfigs;
        }
        withMachineConfigs(machineConfigs:Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>) : org.eclipse.che.api.workspace.shared.dto.EnvironmentDto {
            this.machineConfigs=machineConfigs;
            return this;
        }
        setMachineConfigs(machineConfigs:Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>) : void {
            this.machineConfigs=machineConfigs;
        }
        getName() : string {
            return this.name;
        }
        name:string;
        recipe:org.eclipse.che.api.workspace.shared.dto.RecipeDto;
        machineConfigs:Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.recipe) {
                this.recipe = new org.eclipse.che.api.workspace.shared.dto.RecipeDtoImpl(__jsonObject.recipe);
            }
            this.machineConfigs = new Array<org.eclipse.che.api.machine.shared.dto.MachineConfigDto>();
            if (__jsonObject.machineConfigs) {
                __jsonObject.machineConfigs.forEach((item) => {
                    this.machineConfigs.push(new org.eclipse.che.api.machine.shared.dto.MachineConfigDtoImpl(item));
                });
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineProcessDto {
        setName(arg0 : string): void;
        setType(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        withAlive(arg0 : boolean): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        setOutputChannel(arg0 : string): void;
        withCommandLine(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        setAlive(arg0 : boolean): void;
        setAttributes(arg0 : Map<string,string>): void;
        withAttributes(arg0 : Map<string,string>): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        setCommandLine(arg0 : string): void;
        setPid(arg0 : number): void;
        withPid(arg0 : number): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        withOutputChannel(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineProcessDto;
        isAlive(): boolean;
        getPid(): number;
        getOutputChannel(): string;
        getName(): string;
        getType(): string;
        getAttributes(): Map<string,string>;
        getCommandLine(): string;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineProcessDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
        setName(name:string) : void {
            this.name=name;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.type=type;
            return this;
        }
        withAlive(alive:boolean) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.alive=alive;
            return this;
        }
        setOutputChannel(outputChannel:string) : void {
            this.outputChannel=outputChannel;
        }
        withCommandLine(commandLine:string) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.commandLine=commandLine;
            return this;
        }
        setAlive(alive:boolean) : void {
            this.alive=alive;
        }
        setAttributes(attributes:Map<string,string>) : void {
            this.attributes=attributes;
        }
        withAttributes(attributes:Map<string,string>) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.attributes=attributes;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.links=links;
            return this;
        }
        setCommandLine(commandLine:string) : void {
            this.commandLine=commandLine;
        }
        setPid(pid:number) : void {
            this.pid=pid;
        }
        withPid(pid:number) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.pid=pid;
            return this;
        }
        withOutputChannel(outputChannel:string) : org.eclipse.che.api.machine.shared.dto.MachineProcessDto {
            this.outputChannel=outputChannel;
            return this;
        }
        isAlive() : boolean {
            return this.alive;
        }
        getPid() : number {
            return this.pid;
        }
        getOutputChannel() : string {
            return this.outputChannel;
        }
        getName() : string {
            return this.name;
        }
        getType() : string {
            return this.type;
        }
        getAttributes() : Map<string,string> {
            return this.attributes;
        }
        getCommandLine() : string {
            return this.commandLine;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        alive:boolean;
        outputChannel:string;
        name:string;
        attributes:Map<string,string>;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        pid:number;
        type:string;
        commandLine:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.alive) {
                this.alive = __jsonObject.alive}
            if (__jsonObject.outputChannel) {
                this.outputChannel = __jsonObject.outputChannel}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            this.attributes = new Map<string,string>();
            if (__jsonObject.attributes) {
                let tmp : Array<any> = Object.keys(__jsonObject.attributes);
                tmp.forEach((key) => { this.attributes.set(key, __jsonObject.attributes[key]);});}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.pid) {
                this.pid = __jsonObject.pid}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.commandLine) {
                this.commandLine = __jsonObject.commandLine}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface WorkspaceRuntimeDto {
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        withActiveEnv(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        setDevMachine(arg0 : org.eclipse.che.api.machine.shared.dto.MachineDto): void;
        getDevMachine(): org.eclipse.che.api.machine.shared.dto.MachineDto;
        setActiveEnv(arg0 : string): void;
        withDevMachine(arg0 : org.eclipse.che.api.machine.shared.dto.MachineDto): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        getMachines(): Array<org.eclipse.che.api.machine.shared.dto.MachineDto>;
        setMachines(arg0 : Array<org.eclipse.che.api.machine.shared.dto.MachineDto>): void;
        withMachines(arg0 : Array<org.eclipse.che.api.machine.shared.dto.MachineDto>): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        setRootFolder(arg0 : string): void;
        withRootFolder(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        getActiveEnv(): string;
        getRootFolder(): string;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class WorkspaceRuntimeDtoImpl implements org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            this.links=links;
            return this;
        }
        withActiveEnv(activeEnv:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            this.activeEnv=activeEnv;
            return this;
        }
        setDevMachine(devMachine:org.eclipse.che.api.machine.shared.dto.MachineDto) : void {
            this.devMachine=devMachine;
        }
        getDevMachine() : org.eclipse.che.api.machine.shared.dto.MachineDto {
            return this.devMachine;
        }
        setActiveEnv(activeEnv:string) : void {
            this.activeEnv=activeEnv;
        }
        withDevMachine(devMachine:org.eclipse.che.api.machine.shared.dto.MachineDto) : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            this.devMachine=devMachine;
            return this;
        }
        getMachines() : Array<org.eclipse.che.api.machine.shared.dto.MachineDto> {
            return this.machines;
        }
        setMachines(machines:Array<org.eclipse.che.api.machine.shared.dto.MachineDto>) : void {
            this.machines=machines;
        }
        withMachines(machines:Array<org.eclipse.che.api.machine.shared.dto.MachineDto>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            this.machines=machines;
            return this;
        }
        setRootFolder(rootFolder:string) : void {
            this.rootFolder=rootFolder;
        }
        withRootFolder(rootFolder:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            this.rootFolder=rootFolder;
            return this;
        }
        getActiveEnv() : string {
            return this.activeEnv;
        }
        getRootFolder() : string {
            return this.rootFolder;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        devMachine:org.eclipse.che.api.machine.shared.dto.MachineDto;
        rootFolder:string;
        activeEnv:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        machines:Array<org.eclipse.che.api.machine.shared.dto.MachineDto>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.devMachine) {
                this.devMachine = new org.eclipse.che.api.machine.shared.dto.MachineDtoImpl(__jsonObject.devMachine);
            }
            if (__jsonObject.rootFolder) {
                this.rootFolder = __jsonObject.rootFolder}
            if (__jsonObject.activeEnv) {
                this.activeEnv = __jsonObject.activeEnv}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            this.machines = new Array<org.eclipse.che.api.machine.shared.dto.MachineDto>();
            if (__jsonObject.machines) {
                __jsonObject.machines.forEach((item) => {
                    this.machines.push(new org.eclipse.che.api.machine.shared.dto.MachineDtoImpl(item));
                });
            }
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface ApiInfo {
        setSpecificationVendor(arg0 : string): void;
        withImplementationVendor(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        withSpecificationVendor(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setImplementationVendor(arg0 : string): void;
        withSpecificationTitle(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setSpecificationTitle(arg0 : string): void;
        withSpecificationVersion(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setSpecificationVersion(arg0 : string): void;
        withImplementationVersion(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setImplementationVersion(arg0 : string): void;
        getScmRevision(): string;
        withScmRevision(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setScmRevision(arg0 : string): void;
        getIdeVersion(): string;
        withIdeVersion(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ApiInfo;
        setIdeVersion(arg0 : string): void;
        getSpecificationTitle(): string;
        getSpecificationVersion(): string;
        getSpecificationVendor(): string;
        getImplementationVersion(): string;
        getImplementationVendor(): string;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class ApiInfoImpl implements org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
        setSpecificationVendor(specificationVendor:string) : void {
            this.specificationVendor=specificationVendor;
        }
        withImplementationVendor(implementationVendor:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.implementationVendor=implementationVendor;
            return this;
        }
        withSpecificationVendor(specificationVendor:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.specificationVendor=specificationVendor;
            return this;
        }
        setImplementationVendor(implementationVendor:string) : void {
            this.implementationVendor=implementationVendor;
        }
        withSpecificationTitle(specificationTitle:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.specificationTitle=specificationTitle;
            return this;
        }
        setSpecificationTitle(specificationTitle:string) : void {
            this.specificationTitle=specificationTitle;
        }
        withSpecificationVersion(specificationVersion:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.specificationVersion=specificationVersion;
            return this;
        }
        setSpecificationVersion(specificationVersion:string) : void {
            this.specificationVersion=specificationVersion;
        }
        withImplementationVersion(implementationVersion:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.implementationVersion=implementationVersion;
            return this;
        }
        setImplementationVersion(implementationVersion:string) : void {
            this.implementationVersion=implementationVersion;
        }
        getScmRevision() : string {
            return this.scmRevision;
        }
        withScmRevision(scmRevision:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.scmRevision=scmRevision;
            return this;
        }
        setScmRevision(scmRevision:string) : void {
            this.scmRevision=scmRevision;
        }
        getIdeVersion() : string {
            return this.ideVersion;
        }
        withIdeVersion(ideVersion:string) : org.eclipse.che.api.core.rest.shared.dto.ApiInfo {
            this.ideVersion=ideVersion;
            return this;
        }
        setIdeVersion(ideVersion:string) : void {
            this.ideVersion=ideVersion;
        }
        getSpecificationTitle() : string {
            return this.specificationTitle;
        }
        getSpecificationVersion() : string {
            return this.specificationVersion;
        }
        getSpecificationVendor() : string {
            return this.specificationVendor;
        }
        getImplementationVersion() : string {
            return this.implementationVersion;
        }
        getImplementationVendor() : string {
            return this.implementationVendor;
        }
        specificationVendor:string;
        ideVersion:string;
        specificationTitle:string;
        implementationVersion:string;
        implementationVendor:string;
        scmRevision:string;
        specificationVersion:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.specificationVendor) {
                this.specificationVendor = __jsonObject.specificationVendor}
            if (__jsonObject.ideVersion) {
                this.ideVersion = __jsonObject.ideVersion}
            if (__jsonObject.specificationTitle) {
                this.specificationTitle = __jsonObject.specificationTitle}
            if (__jsonObject.implementationVersion) {
                this.implementationVersion = __jsonObject.implementationVersion}
            if (__jsonObject.implementationVendor) {
                this.implementationVendor = __jsonObject.implementationVendor}
            if (__jsonObject.scmRevision) {
                this.scmRevision = __jsonObject.scmRevision}
            if (__jsonObject.specificationVersion) {
                this.specificationVersion = __jsonObject.specificationVersion}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export interface StackDto {
        setName(arg0 : string): void;
        withId(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        withTags(arg0 : Array<string>): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        setTags(arg0 : Array<string>): void;
        withName(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        setDescription(arg0 : string): void;
        setId(arg0 : string): void;
        withDescription(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        setCreator(arg0 : string): void;
        setSource(arg0 : org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto): void;
        withSource(arg0 : org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        withCreator(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        getWorkspaceConfig(): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        getSource(): org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto;
        setScope(arg0 : string): void;
        withScope(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        setWorkspaceConfig(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto): void;
        withWorkspaceConfig(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        getComponents(): Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>;
        setComponents(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>): void;
        withComponents(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>): org.eclipse.che.api.workspace.shared.dto.stack.StackDto;
        getName(): string;
        getId(): string;
        getCreator(): string;
        getTags(): Array<string>;
        getDescription(): string;
        getScope(): string;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export class StackDtoImpl implements org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
        setName(name:string) : void {
            this.name=name;
        }
        withId(id:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.id=id;
            return this;
        }
        withTags(tags:Array<string>) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.tags=tags;
            return this;
        }
        setTags(tags:Array<string>) : void {
            this.tags=tags;
        }
        withName(name:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.name=name;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        setId(id:string) : void {
            this.id=id;
        }
        withDescription(description:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.description=description;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.links=links;
            return this;
        }
        setCreator(creator:string) : void {
            this.creator=creator;
        }
        setSource(source:org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto) : void {
            this.source=source;
        }
        withSource(source:org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.source=source;
            return this;
        }
        withCreator(creator:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.creator=creator;
            return this;
        }
        getWorkspaceConfig() : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            return this.workspaceConfig;
        }
        getSource() : org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto {
            return this.source;
        }
        setScope(scope:string) : void {
            this.scope=scope;
        }
        withScope(scope:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.scope=scope;
            return this;
        }
        setWorkspaceConfig(workspaceConfig:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto) : void {
            this.workspaceConfig=workspaceConfig;
        }
        withWorkspaceConfig(workspaceConfig:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.workspaceConfig=workspaceConfig;
            return this;
        }
        getComponents() : Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto> {
            return this.components;
        }
        setComponents(components:Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>) : void {
            this.components=components;
        }
        withComponents(components:Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>) : org.eclipse.che.api.workspace.shared.dto.stack.StackDto {
            this.components=components;
            return this;
        }
        getName() : string {
            return this.name;
        }
        getId() : string {
            return this.id;
        }
        getCreator() : string {
            return this.creator;
        }
        getTags() : Array<string> {
            return this.tags;
        }
        getDescription() : string {
            return this.description;
        }
        getScope() : string {
            return this.scope;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        creator:string;
        components:Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>;
        scope:string;
        name:string;
        description:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        id:string;
        source:org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto;
        workspaceConfig:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        tags:Array<string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.creator) {
                this.creator = __jsonObject.creator}
            this.components = new Array<org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto>();
            if (__jsonObject.components) {
                __jsonObject.components.forEach((item) => {
                    this.components.push(new org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDtoImpl(item));
                });
            }
            if (__jsonObject.scope) {
                this.scope = __jsonObject.scope}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.source) {
                this.source = new org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDtoImpl(__jsonObject.source);
            }
            if (__jsonObject.workspaceConfig) {
                this.workspaceConfig = new org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDtoImpl(__jsonObject.workspaceConfig);
            }
            this.tags = new Array<string>();
            if (__jsonObject.tags) {
                __jsonObject.tags.forEach((item) => {
                    this.tags.push(item);
                });
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineLogMessageDto {
        withMachineName(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineLogMessageDto;
        setContent(arg0 : string): void;
        withContent(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineLogMessageDto;
        setMachineName(arg0 : string): void;
        getContent(): string;
        getMachineName(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineLogMessageDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineLogMessageDto {
        withMachineName(machineName:string) : org.eclipse.che.api.machine.shared.dto.MachineLogMessageDto {
            this.machineName=machineName;
            return this;
        }
        setContent(content:string) : void {
            this.content=content;
        }
        withContent(content:string) : org.eclipse.che.api.machine.shared.dto.MachineLogMessageDto {
            this.content=content;
            return this;
        }
        setMachineName(machineName:string) : void {
            this.machineName=machineName;
        }
        getContent() : string {
            return this.content;
        }
        getMachineName() : string {
            return this.machineName;
        }
        machineName:string;
        content:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.machineName) {
                this.machineName = __jsonObject.machineName}
            if (__jsonObject.content) {
                this.content = __jsonObject.content}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export interface StackComponentDto {
        setName(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto;
        withVersion(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto;
        setVersion(arg0 : string): void;
        getName(): string;
        getVersion(): string;
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export class StackComponentDtoImpl implements org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto {
        setName(name:string) : void {
            this.name=name;
        }
        withName(name:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto {
            this.name=name;
            return this;
        }
        withVersion(version:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackComponentDto {
            this.version=version;
            return this;
        }
        setVersion(version:string) : void {
            this.version=version;
        }
        getName() : string {
            return this.name;
        }
        getVersion() : string {
            return this.version;
        }
        name:string;
        version:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.version) {
                this.version = __jsonObject.version}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface RequestBodyDescriptor {
        setDescription(arg0 : string): void;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class RequestBodyDescriptorImpl implements org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor {
        setDescription(description:string) : void {
            this.description=description;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor {
            this.description=description;
            return this;
        }
        description:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineConfigDto {
        getName(): string;
        setName(arg0 : string): void;
        getType(): string;
        setType(arg0 : string): void;
        setDev(arg0 : boolean): void;
        isDev(): boolean;
        withDev(arg0 : boolean): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        setSource(arg0 : org.eclipse.che.api.machine.shared.dto.MachineSourceDto): void;
        withSource(arg0 : org.eclipse.che.api.machine.shared.dto.MachineSourceDto): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        getSource(): org.eclipse.che.api.machine.shared.dto.MachineSourceDto;
        getLimits(): org.eclipse.che.api.machine.shared.dto.LimitsDto;
        setLimits(arg0 : org.eclipse.che.api.machine.shared.dto.LimitsDto): void;
        withLimits(arg0 : org.eclipse.che.api.machine.shared.dto.LimitsDto): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        getServers(): Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>;
        setServers(arg0 : Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>): void;
        withServers(arg0 : Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        getEnvVariables(): Map<string,string>;
        setEnvVariables(arg0 : Map<string,string>): void;
        withEnvVariables(arg0 : Map<string,string>): org.eclipse.che.api.machine.shared.dto.MachineConfigDto;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineConfigDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
        getName() : string {
            return this.name;
        }
        setName(name:string) : void {
            this.name=name;
        }
        getType() : string {
            return this.type;
        }
        setType(type:string) : void {
            this.type=type;
        }
        setDev(dev:boolean) : void {
            this.dev=dev;
        }
        isDev() : boolean {
            return this.dev;
        }
        withDev(dev:boolean) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.dev=dev;
            return this;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.type=type;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.links=links;
            return this;
        }
        setSource(source:org.eclipse.che.api.machine.shared.dto.MachineSourceDto) : void {
            this.source=source;
        }
        withSource(source:org.eclipse.che.api.machine.shared.dto.MachineSourceDto) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.source=source;
            return this;
        }
        getSource() : org.eclipse.che.api.machine.shared.dto.MachineSourceDto {
            return this.source;
        }
        getLimits() : org.eclipse.che.api.machine.shared.dto.LimitsDto {
            return this.limits;
        }
        setLimits(limits:org.eclipse.che.api.machine.shared.dto.LimitsDto) : void {
            this.limits=limits;
        }
        withLimits(limits:org.eclipse.che.api.machine.shared.dto.LimitsDto) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.limits=limits;
            return this;
        }
        getServers() : Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto> {
            return this.servers;
        }
        setServers(servers:Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>) : void {
            this.servers=servers;
        }
        withServers(servers:Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.servers=servers;
            return this;
        }
        getEnvVariables() : Map<string,string> {
            return this.envVariables;
        }
        setEnvVariables(envVariables:Map<string,string>) : void {
            this.envVariables=envVariables;
        }
        withEnvVariables(envVariables:Map<string,string>) : org.eclipse.che.api.machine.shared.dto.MachineConfigDto {
            this.envVariables=envVariables;
            return this;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        servers:Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>;
        dev:boolean;
        envVariables:Map<string,string>;
        name:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        source:org.eclipse.che.api.machine.shared.dto.MachineSourceDto;
        type:string;
        limits:org.eclipse.che.api.machine.shared.dto.LimitsDto;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            this.servers = new Array<org.eclipse.che.api.machine.shared.dto.ServerConfDto>();
            if (__jsonObject.servers) {
                __jsonObject.servers.forEach((item) => {
                    this.servers.push(new org.eclipse.che.api.machine.shared.dto.ServerConfDtoImpl(item));
                });
            }
            if (__jsonObject.dev) {
                this.dev = __jsonObject.dev}
            this.envVariables = new Map<string,string>();
            if (__jsonObject.envVariables) {
                let tmp : Array<any> = Object.keys(__jsonObject.envVariables);
                tmp.forEach((key) => { this.envVariables.set(key, __jsonObject.envVariables[key]);});}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.source) {
                this.source = new org.eclipse.che.api.machine.shared.dto.MachineSourceDtoImpl(__jsonObject.source);
            }
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.limits) {
                this.limits = new org.eclipse.che.api.machine.shared.dto.LimitsDtoImpl(__jsonObject.limits);
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface ServerDto {
        getAddress(): string;
        getPath(): string;
        getProtocol(): string;
        getRef(): string;
        setAddress(arg0 : string): void;
        withProtocol(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerDto;
        withAddress(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerDto;
        setUrl(arg0 : string): void;
        withUrl(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerDto;
        getUrl(): string;
        setProtocol(arg0 : string): void;
        withPath(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerDto;
        setPath(arg0 : string): void;
        setRef(arg0 : string): void;
        withRef(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerDto;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class ServerDtoImpl implements org.eclipse.che.api.machine.shared.dto.ServerDto {
        getAddress() : string {
            return this.address;
        }
        getPath() : string {
            return this.path;
        }
        getProtocol() : string {
            return this.protocol;
        }
        getRef() : string {
            return this.ref;
        }
        setAddress(address:string) : void {
            this.address=address;
        }
        withProtocol(protocol:string) : org.eclipse.che.api.machine.shared.dto.ServerDto {
            this.protocol=protocol;
            return this;
        }
        withAddress(address:string) : org.eclipse.che.api.machine.shared.dto.ServerDto {
            this.address=address;
            return this;
        }
        setUrl(url:string) : void {
            this.url=url;
        }
        withUrl(url:string) : org.eclipse.che.api.machine.shared.dto.ServerDto {
            this.url=url;
            return this;
        }
        getUrl() : string {
            return this.url;
        }
        setProtocol(protocol:string) : void {
            this.protocol=protocol;
        }
        withPath(path:string) : org.eclipse.che.api.machine.shared.dto.ServerDto {
            this.path=path;
            return this;
        }
        setPath(path:string) : void {
            this.path=path;
        }
        setRef(ref:string) : void {
            this.ref=ref;
        }
        withRef(ref:string) : org.eclipse.che.api.machine.shared.dto.ServerDto {
            this.ref=ref;
            return this;
        }
        path:string;
        protocol:string;
        ref:string;
        address:string;
        url:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.path) {
                this.path = __jsonObject.path}
            if (__jsonObject.protocol) {
                this.protocol = __jsonObject.protocol}
            if (__jsonObject.ref) {
                this.ref = __jsonObject.ref}
            if (__jsonObject.address) {
                this.address = __jsonObject.address}
            if (__jsonObject.url) {
                this.url = __jsonObject.url}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export interface StackSourceDto {
        setType(arg0 : string): void;
        withType(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto;
        withOrigin(arg0 : string): org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto;
        setOrigin(arg0 : string): void;
        getType(): string;
        getOrigin(): string;
    }
}

export module org.eclipse.che.api.workspace.shared.dto.stack {
    export class StackSourceDtoImpl implements org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto {
        setType(type:string) : void {
            this.type=type;
        }
        withType(type:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto {
            this.type=type;
            return this;
        }
        withOrigin(origin:string) : org.eclipse.che.api.workspace.shared.dto.stack.StackSourceDto {
            this.origin=origin;
            return this;
        }
        setOrigin(origin:string) : void {
            this.origin=origin;
        }
        getType() : string {
            return this.type;
        }
        getOrigin() : string {
            return this.origin;
        }
        origin:string;
        type:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.origin) {
                this.origin = __jsonObject.origin}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface ServiceError {
        getMessage(): string;
        withMessage(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ServiceError;
        setMessage(arg0 : string): void;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class ServiceErrorImpl implements org.eclipse.che.api.core.rest.shared.dto.ServiceError {
        getMessage() : string {
            return this.message;
        }
        withMessage(message:string) : org.eclipse.che.api.core.rest.shared.dto.ServiceError {
            this.message=message;
            return this;
        }
        setMessage(message:string) : void {
            this.message=message;
        }
        message:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface ExtendedError {
        getAttributes(): Map<string,string>;
        withMessage(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.ExtendedError;
        setAttributes(arg0 : Map<string,string>): void;
        withAttributes(arg0 : Map<string,string>): org.eclipse.che.api.core.rest.shared.dto.ExtendedError;
        setErrorCode(arg0 : number): void;
        withErrorCode(arg0 : number): org.eclipse.che.api.core.rest.shared.dto.ExtendedError;
        getErrorCode(): number;
        getMessage(): string;
        setMessage(arg0 : string): void;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class ExtendedErrorImpl implements org.eclipse.che.api.core.rest.shared.dto.ExtendedError {
        getAttributes() : Map<string,string> {
            return this.attributes;
        }
        withMessage(message:string) : org.eclipse.che.api.core.rest.shared.dto.ExtendedError {
            this.message=message;
            return this;
        }
        setAttributes(attributes:Map<string,string>) : void {
            this.attributes=attributes;
        }
        withAttributes(attributes:Map<string,string>) : org.eclipse.che.api.core.rest.shared.dto.ExtendedError {
            this.attributes=attributes;
            return this;
        }
        setErrorCode(errorCode:number) : void {
            this.errorCode=errorCode;
        }
        withErrorCode(errorCode:number) : org.eclipse.che.api.core.rest.shared.dto.ExtendedError {
            this.errorCode=errorCode;
            return this;
        }
        getErrorCode() : number {
            return this.errorCode;
        }
        getMessage() : string {
            return this.message;
        }
        setMessage(message:string) : void {
            this.message=message;
        }
        errorCode:number;
        attributes:Map<string,string>;
        message:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.errorCode) {
                this.errorCode = __jsonObject.errorCode}
            this.attributes = new Map<string,string>();
            if (__jsonObject.attributes) {
                let tmp : Array<any> = Object.keys(__jsonObject.attributes);
                tmp.forEach((key) => { this.attributes.set(key, __jsonObject.attributes[key]);});}
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export interface RecipeUpdate {
        setName(arg0 : string): void;
        setType(arg0 : string): void;
        withId(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        withTags(arg0 : Array<string>): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        setTags(arg0 : Array<string>): void;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        setDescription(arg0 : string): void;
        withScript(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        setScript(arg0 : string): void;
        setId(arg0 : string): void;
        withDescription(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate;
        getName(): string;
        getId(): string;
        getCreator(): string;
        getTags(): Array<string>;
        getDescription(): string;
        getType(): string;
        getScript(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export class RecipeUpdateImpl implements org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
        setName(name:string) : void {
            this.name=name;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withId(id:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.id=id;
            return this;
        }
        withTags(tags:Array<string>) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.tags=tags;
            return this;
        }
        setTags(tags:Array<string>) : void {
            this.tags=tags;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        withScript(script:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.script=script;
            return this;
        }
        setScript(script:string) : void {
            this.script=script;
        }
        setId(id:string) : void {
            this.id=id;
        }
        withDescription(description:string) : org.eclipse.che.api.machine.shared.dto.recipe.RecipeUpdate {
            this.description=description;
            return this;
        }
        getName() : string {
            return this.name;
        }
        getId() : string {
            return this.id;
        }
        getCreator() : string {
            return this.creator;
        }
        getTags() : Array<string> {
            return this.tags;
        }
        getDescription() : string {
            return this.description;
        }
        getType() : string {
            return this.type;
        }
        getScript() : string {
            return this.script;
        }
        creator:string;
        name:string;
        description:string;
        id:string;
        type:string;
        script:string;
        tags:Array<string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.creator) {
                this.creator = __jsonObject.creator}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.script) {
                this.script = __jsonObject.script}
            this.tags = new Array<string>();
            if (__jsonObject.tags) {
                __jsonObject.tags.forEach((item) => {
                    this.tags.push(item);
                });
            }
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface SourceStorageDto {
        getLocation(): string;
        getType(): string;
        getParameters(): Map<string,string>;
        setType(arg0 : string): void;
        withType(arg0 : string): org.eclipse.che.api.workspace.shared.dto.SourceStorageDto;
        withParameters(arg0 : Map<string,string>): org.eclipse.che.api.workspace.shared.dto.SourceStorageDto;
        setParameters(arg0 : Map<string,string>): void;
        setLocation(arg0 : string): void;
        withLocation(arg0 : string): org.eclipse.che.api.workspace.shared.dto.SourceStorageDto;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class SourceStorageDtoImpl implements org.eclipse.che.api.workspace.shared.dto.SourceStorageDto {
        getLocation() : string {
            return this.location;
        }
        getType() : string {
            return this.type;
        }
        getParameters() : Map<string,string> {
            return this.parameters;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withType(type:string) : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto {
            this.type=type;
            return this;
        }
        withParameters(parameters:Map<string,string>) : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto {
            this.parameters=parameters;
            return this;
        }
        setParameters(parameters:Map<string,string>) : void {
            this.parameters=parameters;
        }
        setLocation(location:string) : void {
            this.location=location;
        }
        withLocation(location:string) : org.eclipse.che.api.workspace.shared.dto.SourceStorageDto {
            this.location=location;
            return this;
        }
        location:string;
        type:string;
        parameters:Map<string,string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.location) {
                this.location = __jsonObject.location}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            this.parameters = new Map<string,string>();
            if (__jsonObject.parameters) {
                let tmp : Array<any> = Object.keys(__jsonObject.parameters);
                tmp.forEach((key) => { this.parameters.set(key, __jsonObject.parameters[key]);});}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface LinkParameter {
        getName(): string;
        setName(arg0 : string): void;
        getType(): string;
        getDefaultValue(): string;
        setType(arg0 : string): void;
        setDefaultValue(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
        withType(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
        setDescription(arg0 : string): void;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
        withDefaultValue(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
        withRequired(arg0 : boolean): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
        getValid(): Array<string>;
        setValid(arg0 : Array<string>): void;
        isRequired(): boolean;
        setRequired(arg0 : boolean): void;
        withValid(arg0 : Array<string>): org.eclipse.che.api.core.rest.shared.dto.LinkParameter;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class LinkParameterImpl implements org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
        getName() : string {
            return this.name;
        }
        setName(name:string) : void {
            this.name=name;
        }
        getType() : string {
            return this.type;
        }
        getDefaultValue() : string {
            return this.defaultValue;
        }
        setType(type:string) : void {
            this.type=type;
        }
        setDefaultValue(defaultValue:string) : void {
            this.defaultValue=defaultValue;
        }
        withName(name:string) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.description=description;
            return this;
        }
        withDefaultValue(defaultValue:string) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.defaultValue=defaultValue;
            return this;
        }
        withRequired(required:boolean) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.required=required;
            return this;
        }
        getValid() : Array<string> {
            return this.valid;
        }
        setValid(valid:Array<string>) : void {
            this.valid=valid;
        }
        isRequired() : boolean {
            return this.required;
        }
        setRequired(required:boolean) : void {
            this.required=required;
        }
        withValid(valid:Array<string>) : org.eclipse.che.api.core.rest.shared.dto.LinkParameter {
            this.valid=valid;
            return this;
        }
        valid:Array<string>;
        defaultValue:string;
        name:string;
        description:string;
        type:string;
        required:boolean;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            this.valid = new Array<string>();
            if (__jsonObject.valid) {
                __jsonObject.valid.forEach((item) => {
                    this.valid.push(item);
                });
            }
            if (__jsonObject.defaultValue) {
                this.defaultValue = __jsonObject.defaultValue}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            if (__jsonObject.type) {
            }
            if (__jsonObject.required) {
                this.required = __jsonObject.required}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface Hyperlinks {
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.core.rest.shared.dto.Hyperlinks;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class HyperlinksImpl implements org.eclipse.che.api.core.rest.shared.dto.Hyperlinks {
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.core.rest.shared.dto.Hyperlinks {
            this.links=links;
            return this;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineRuntimeInfoDto {
        getServers(): Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto>;
        withServers(arg0 : Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto>): org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto;
        withEnvVariables(arg0 : Map<string,string>): org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto;
        withProperties(arg0 : Map<string,string>): org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto;
        getProperties(): Map<string,string>;
        getEnvVariables(): Map<string,string>;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineRuntimeInfoDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto {
        getServers() : Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto> {
            return this.servers;
        }
        withServers(servers:Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto>) : org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto {
            this.servers=servers;
            return this;
        }
        withEnvVariables(envVariables:Map<string,string>) : org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto {
            this.envVariables=envVariables;
            return this;
        }
        withProperties(properties:Map<string,string>) : org.eclipse.che.api.machine.shared.dto.MachineRuntimeInfoDto {
            this.properties=properties;
            return this;
        }
        getProperties() : Map<string,string> {
            return this.properties;
        }
        getEnvVariables() : Map<string,string> {
            return this.envVariables;
        }
        servers:Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto>;
        envVariables:Map<string,string>;
        properties:Map<string,string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            this.servers = new Map<string,org.eclipse.che.api.machine.shared.dto.ServerDto>();
            if (__jsonObject.servers) {
                let tmp : Array<any> = Object.keys(__jsonObject.servers);
                tmp.forEach((key) => { this.servers.set(key, __jsonObject.servers[key]);});}
            this.envVariables = new Map<string,string>();
            if (__jsonObject.envVariables) {
                let tmp : Array<any> = Object.keys(__jsonObject.envVariables);
                tmp.forEach((key) => { this.envVariables.set(key, __jsonObject.envVariables[key]);});}
            this.properties = new Map<string,string>();
            if (__jsonObject.properties) {
                let tmp : Array<any> = Object.keys(__jsonObject.properties);
                tmp.forEach((key) => { this.properties.set(key, __jsonObject.properties[key]);});}
        }
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export interface JsonRpcResponse {
        getId(): number;
        getResult(): string;
        withResult(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse;
        withId(arg0 : number): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse;
        withError(arg0 : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse;
        getError(): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError;
        withJsonrpc(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse;
        getJsonrpc(): string;
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export class JsonRpcResponseImpl implements org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse {
        getId() : number {
            return this.id;
        }
        getResult() : string {
            return this.result;
        }
        withResult(result:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse {
            this.result=result;
            return this;
        }
        withId(id:number) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse {
            this.id=id;
            return this;
        }
        withError(error:org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse {
            this.error=error;
            return this;
        }
        getError() : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError {
            return this.error;
        }
        withJsonrpc(jsonrpc:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcResponse {
            this.jsonrpc=jsonrpc;
            return this;
        }
        getJsonrpc() : string {
            return this.jsonrpc;
        }
        result:string;
        id:number;
        error:org.eclipse.che.api.core.jsonrpc.shared.JsonRpcError;
        jsonrpc:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.result) {
                this.result = __jsonObject.result}
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.error) {
                this.error = new org.eclipse.che.api.core.jsonrpc.shared.JsonRpcErrorImpl(__jsonObject.error);
            }
            if (__jsonObject.jsonrpc) {
                this.jsonrpc = __jsonObject.jsonrpc}
        }
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export interface JsonRpcObject {
        getMessage(): string;
        getType(): string;
        withType(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcObject;
        withMessage(arg0 : string): org.eclipse.che.api.core.jsonrpc.shared.JsonRpcObject;
    }
}

export module org.eclipse.che.api.core.jsonrpc.shared {
    export class JsonRpcObjectImpl implements org.eclipse.che.api.core.jsonrpc.shared.JsonRpcObject {
        getMessage() : string {
            return this.message;
        }
        getType() : string {
            return this.type;
        }
        withType(type:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcObject {
            this.type=type;
            return this;
        }
        withMessage(message:string) : org.eclipse.che.api.core.jsonrpc.shared.JsonRpcObject {
            this.message=message;
            return this;
        }
        message:string;
        type:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
        }
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export interface Link {
        getMethod(): string;
        getParameters(): Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>;
        setMethod(arg0 : string): void;
        setRel(arg0 : string): void;
        setHref(arg0 : string): void;
        withRel(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.Link;
        getRel(): string;
        withHref(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.Link;
        withParameters(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>): org.eclipse.che.api.core.rest.shared.dto.Link;
        getHref(): string;
        withMethod(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.Link;
        getProduces(): string;
        withProduces(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.Link;
        setProduces(arg0 : string): void;
        getConsumes(): string;
        withConsumes(arg0 : string): org.eclipse.che.api.core.rest.shared.dto.Link;
        setConsumes(arg0 : string): void;
        setParameters(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>): void;
        getRequestBody(): org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor;
        withRequestBody(arg0 : org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor): org.eclipse.che.api.core.rest.shared.dto.Link;
        setRequestBody(arg0 : org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor): void;
    }
}

export module org.eclipse.che.api.core.rest.shared.dto {
    export class LinkImpl implements org.eclipse.che.api.core.rest.shared.dto.Link {
        getMethod() : string {
            return this.method;
        }
        getParameters() : Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter> {
            return this.parameters;
        }
        setMethod(method:string) : void {
            this.method=method;
        }
        setRel(rel:string) : void {
            this.rel=rel;
        }
        setHref(href:string) : void {
            this.href=href;
        }
        withRel(rel:string) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.rel=rel;
            return this;
        }
        getRel() : string {
            return this.rel;
        }
        withHref(href:string) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.href=href;
            return this;
        }
        withParameters(parameters:Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.parameters=parameters;
            return this;
        }
        getHref() : string {
            return this.href;
        }
        withMethod(method:string) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.method=method;
            return this;
        }
        getProduces() : string {
            return this.produces;
        }
        withProduces(produces:string) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.produces=produces;
            return this;
        }
        setProduces(produces:string) : void {
            this.produces=produces;
        }
        getConsumes() : string {
            return this.consumes;
        }
        withConsumes(consumes:string) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.consumes=consumes;
            return this;
        }
        setConsumes(consumes:string) : void {
            this.consumes=consumes;
        }
        setParameters(parameters:Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>) : void {
            this.parameters=parameters;
        }
        getRequestBody() : org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor {
            return this.requestBody;
        }
        withRequestBody(requestBody:org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor) : org.eclipse.che.api.core.rest.shared.dto.Link {
            this.requestBody=requestBody;
            return this;
        }
        setRequestBody(requestBody:org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor) : void {
            this.requestBody=requestBody;
        }
        method:string;
        requestBody:org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptor;
        rel:string;
        produces:string;
        href:string;
        parameters:Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>;
        consumes:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.method) {
                this.method = __jsonObject.method}
            if (__jsonObject.requestBody) {
                this.requestBody = new org.eclipse.che.api.core.rest.shared.dto.RequestBodyDescriptorImpl(__jsonObject.requestBody);
            }
            if (__jsonObject.rel) {
                this.rel = __jsonObject.rel}
            if (__jsonObject.produces) {
                this.produces = __jsonObject.produces}
            if (__jsonObject.href) {
                this.href = __jsonObject.href}
            this.parameters = new Array<org.eclipse.che.api.core.rest.shared.dto.LinkParameter>();
            if (__jsonObject.parameters) {
                __jsonObject.parameters.forEach((item) => {
                    this.parameters.push(new org.eclipse.che.api.core.rest.shared.dto.LinkParameterImpl(item));
                });
            }
            if (__jsonObject.consumes) {
                this.consumes = __jsonObject.consumes}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface MachineSourceDto {
        getLocation(): string;
        getType(): string;
        getContent(): string;
        setType(arg0 : string): void;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineSourceDto;
        setContent(arg0 : string): void;
        withContent(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineSourceDto;
        setLocation(arg0 : string): void;
        withLocation(arg0 : string): org.eclipse.che.api.machine.shared.dto.MachineSourceDto;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class MachineSourceDtoImpl implements org.eclipse.che.api.machine.shared.dto.MachineSourceDto {
        getLocation() : string {
            return this.location;
        }
        getType() : string {
            return this.type;
        }
        getContent() : string {
            return this.content;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.MachineSourceDto {
            this.type=type;
            return this;
        }
        setContent(content:string) : void {
            this.content=content;
        }
        withContent(content:string) : org.eclipse.che.api.machine.shared.dto.MachineSourceDto {
            this.content=content;
            return this;
        }
        setLocation(location:string) : void {
            this.location=location;
        }
        withLocation(location:string) : org.eclipse.che.api.machine.shared.dto.MachineSourceDto {
            this.location=location;
            return this;
        }
        location:string;
        type:string;
        content:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.location) {
                this.location = __jsonObject.location}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.content) {
                this.content = __jsonObject.content}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export interface MachineRecipe {
        setType(arg0 : string): void;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.MachineRecipe;
        withScript(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.MachineRecipe;
        setScript(arg0 : string): void;
        getType(): string;
        getScript(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export class MachineRecipeImpl implements org.eclipse.che.api.machine.shared.dto.recipe.MachineRecipe {
        setType(type:string) : void {
            this.type=type;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.recipe.MachineRecipe {
            this.type=type;
            return this;
        }
        withScript(script:string) : org.eclipse.che.api.machine.shared.dto.recipe.MachineRecipe {
            this.script=script;
            return this;
        }
        setScript(script:string) : void {
            this.script=script;
        }
        getType() : string {
            return this.type;
        }
        getScript() : string {
            return this.script;
        }
        type:string;
        script:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.script) {
                this.script = __jsonObject.script}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export interface NewRecipe {
        setName(arg0 : string): void;
        setType(arg0 : string): void;
        withTags(arg0 : Array<string>): org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe;
        setTags(arg0 : Array<string>): void;
        withName(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe;
        setDescription(arg0 : string): void;
        withScript(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe;
        setScript(arg0 : string): void;
        withDescription(arg0 : string): org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe;
        getName(): string;
        getId(): string;
        getCreator(): string;
        getTags(): Array<string>;
        getDescription(): string;
        getType(): string;
        getScript(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.recipe {
    export class NewRecipeImpl implements org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
        setName(name:string) : void {
            this.name=name;
        }
        setType(type:string) : void {
            this.type=type;
        }
        withTags(tags:Array<string>) : org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
            this.tags=tags;
            return this;
        }
        setTags(tags:Array<string>) : void {
            this.tags=tags;
        }
        withName(name:string) : org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
            this.name=name;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        withScript(script:string) : org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
            this.script=script;
            return this;
        }
        setScript(script:string) : void {
            this.script=script;
        }
        withDescription(description:string) : org.eclipse.che.api.machine.shared.dto.recipe.NewRecipe {
            this.description=description;
            return this;
        }
        getName() : string {
            return this.name;
        }
        getId() : string {
            return this.id;
        }
        getCreator() : string {
            return this.creator;
        }
        getTags() : Array<string> {
            return this.tags;
        }
        getDescription() : string {
            return this.description;
        }
        getType() : string {
            return this.type;
        }
        getScript() : string {
            return this.script;
        }
        creator:string;
        name:string;
        description:string;
        id:string;
        type:string;
        script:string;
        tags:Array<string>;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.creator) {
                this.creator = __jsonObject.creator}
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.script) {
                this.script = __jsonObject.script}
            this.tags = new Array<string>();
            if (__jsonObject.tags) {
                __jsonObject.tags.forEach((item) => {
                    this.tags.push(item);
                });
            }
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface ServerConfDto {
        setPort(arg0 : string): void;
        withProtocol(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerConfDto;
        setProtocol(arg0 : string): void;
        withPath(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerConfDto;
        setPath(arg0 : string): void;
        withPort(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerConfDto;
        setRef(arg0 : string): void;
        withRef(arg0 : string): org.eclipse.che.api.machine.shared.dto.ServerConfDto;
        getPath(): string;
        getProtocol(): string;
        getPort(): string;
        getRef(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class ServerConfDtoImpl implements org.eclipse.che.api.machine.shared.dto.ServerConfDto {
        setPort(port:string) : void {
            this.port=port;
        }
        withProtocol(protocol:string) : org.eclipse.che.api.machine.shared.dto.ServerConfDto {
            this.protocol=protocol;
            return this;
        }
        setProtocol(protocol:string) : void {
            this.protocol=protocol;
        }
        withPath(path:string) : org.eclipse.che.api.machine.shared.dto.ServerConfDto {
            this.path=path;
            return this;
        }
        setPath(path:string) : void {
            this.path=path;
        }
        withPort(port:string) : org.eclipse.che.api.machine.shared.dto.ServerConfDto {
            this.port=port;
            return this;
        }
        setRef(ref:string) : void {
            this.ref=ref;
        }
        withRef(ref:string) : org.eclipse.che.api.machine.shared.dto.ServerConfDto {
            this.ref=ref;
            return this;
        }
        getPath() : string {
            return this.path;
        }
        getProtocol() : string {
            return this.protocol;
        }
        getPort() : string {
            return this.port;
        }
        getRef() : string {
            return this.ref;
        }
        path:string;
        protocol:string;
        ref:string;
        port:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.path) {
                this.path = __jsonObject.path}
            if (__jsonObject.protocol) {
                this.protocol = __jsonObject.protocol}
            if (__jsonObject.ref) {
                this.ref = __jsonObject.ref}
            if (__jsonObject.port) {
                this.port = __jsonObject.port}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface WorkspaceDto {
        getRuntime(): org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        withId(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setId(arg0 : string): void;
        setConfig(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto): void;
        getConfig(): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        withConfig(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setRuntime(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto): void;
        withRuntime(arg0 : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setNamespace(arg0 : string): void;
        withNamespace(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setStatus(arg0 : string): void;
        withStatus(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setTemporary(arg0 : boolean): void;
        withTemporary(arg0 : boolean): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        setAttributes(arg0 : Map<string,string>): void;
        withAttributes(arg0 : Map<string,string>): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.workspace.shared.dto.WorkspaceDto;
        getId(): string;
        getAttributes(): Map<string,string>;
        isTemporary(): boolean;
        getNamespace(): string;
        getStatus(): string;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class WorkspaceDtoImpl implements org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
        getRuntime() : org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto {
            return this.runtime;
        }
        withId(id:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.id=id;
            return this;
        }
        setId(id:string) : void {
            this.id=id;
        }
        setConfig(config:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto) : void {
            this.config=config;
        }
        getConfig() : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            return this.config;
        }
        withConfig(config:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.config=config;
            return this;
        }
        setRuntime(runtime:org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto) : void {
            this.runtime=runtime;
        }
        withRuntime(runtime:org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.runtime=runtime;
            return this;
        }
        setNamespace(namespace:string) : void {
            this.namespace=namespace;
        }
        withNamespace(namespace:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.namespace=namespace;
            return this;
        }
        setStatus(status:string) : void {
            this.status=status;
        }
        withStatus(status:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.status=status;
            return this;
        }
        setTemporary(temporary:boolean) : void {
            this.temporary=temporary;
        }
        withTemporary(temporary:boolean) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.temporary=temporary;
            return this;
        }
        setAttributes(attributes:Map<string,string>) : void {
            this.attributes=attributes;
        }
        withAttributes(attributes:Map<string,string>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.attributes=attributes;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceDto {
            this.links=links;
            return this;
        }
        getId() : string {
            return this.id;
        }
        getAttributes() : Map<string,string> {
            return this.attributes;
        }
        isTemporary() : boolean {
            return this.temporary;
        }
        getNamespace() : string {
            return this.namespace;
        }
        getStatus() : string {
            return this.status;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        temporary:boolean;
        namespace:string;
        runtime:org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDto;
        attributes:Map<string,string>;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        id:string;
        config:org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        status:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.temporary) {
                this.temporary = __jsonObject.temporary}
            if (__jsonObject.namespace) {
                this.namespace = __jsonObject.namespace}
            if (__jsonObject.runtime) {
                this.runtime = new org.eclipse.che.api.workspace.shared.dto.WorkspaceRuntimeDtoImpl(__jsonObject.runtime);
            }
            this.attributes = new Map<string,string>();
            if (__jsonObject.attributes) {
                let tmp : Array<any> = Object.keys(__jsonObject.attributes);
                tmp.forEach((key) => { this.attributes.set(key, __jsonObject.attributes[key]);});}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.config) {
                this.config = new org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDtoImpl(__jsonObject.config);
            }
            if (__jsonObject.status) {
            }
        }
    }
}

export module org.eclipse.che.api.core.websocket.shared {
    export interface WebSocketTransmission {
        getMessage(): string;
        getProtocol(): string;
        withMessage(arg0 : string): org.eclipse.che.api.core.websocket.shared.WebSocketTransmission;
        withProtocol(arg0 : string): org.eclipse.che.api.core.websocket.shared.WebSocketTransmission;
    }
}

export module org.eclipse.che.api.core.websocket.shared {
    export class WebSocketTransmissionImpl implements org.eclipse.che.api.core.websocket.shared.WebSocketTransmission {
        getMessage() : string {
            return this.message;
        }
        getProtocol() : string {
            return this.protocol;
        }
        withMessage(message:string) : org.eclipse.che.api.core.websocket.shared.WebSocketTransmission {
            this.message=message;
            return this;
        }
        withProtocol(protocol:string) : org.eclipse.che.api.core.websocket.shared.WebSocketTransmission {
            this.protocol=protocol;
            return this;
        }
        protocol:string;
        message:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.protocol) {
                this.protocol = __jsonObject.protocol}
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface WorkspaceConfigDto {
        getName(): string;
        setName(arg0 : string): void;
        withName(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        setDescription(arg0 : string): void;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        getCommands(): Array<org.eclipse.che.api.machine.shared.dto.CommandDto>;
        setCommands(arg0 : Array<org.eclipse.che.api.machine.shared.dto.CommandDto>): void;
        getDefaultEnv(): string;
        setDefaultEnv(arg0 : string): void;
        withDefaultEnv(arg0 : string): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        withCommands(arg0 : Array<org.eclipse.che.api.machine.shared.dto.CommandDto>): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        getProjects(): Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>;
        setProjects(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>): void;
        withProjects(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        getEnvironments(): Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>;
        setEnvironments(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>): void;
        withEnvironments(arg0 : Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>): org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class WorkspaceConfigDtoImpl implements org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
        getName() : string {
            return this.name;
        }
        setName(name:string) : void {
            this.name=name;
        }
        withName(name:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.name=name;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.description=description;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.links=links;
            return this;
        }
        getCommands() : Array<org.eclipse.che.api.machine.shared.dto.CommandDto> {
            return this.commands;
        }
        setCommands(commands:Array<org.eclipse.che.api.machine.shared.dto.CommandDto>) : void {
            this.commands=commands;
        }
        getDefaultEnv() : string {
            return this.defaultEnv;
        }
        setDefaultEnv(defaultEnv:string) : void {
            this.defaultEnv=defaultEnv;
        }
        withDefaultEnv(defaultEnv:string) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.defaultEnv=defaultEnv;
            return this;
        }
        withCommands(commands:Array<org.eclipse.che.api.machine.shared.dto.CommandDto>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.commands=commands;
            return this;
        }
        getProjects() : Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto> {
            return this.projects;
        }
        setProjects(projects:Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>) : void {
            this.projects=projects;
        }
        withProjects(projects:Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.projects=projects;
            return this;
        }
        getEnvironments() : Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto> {
            return this.environments;
        }
        setEnvironments(environments:Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>) : void {
            this.environments=environments;
        }
        withEnvironments(environments:Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>) : org.eclipse.che.api.workspace.shared.dto.WorkspaceConfigDto {
            this.environments=environments;
            return this;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        projects:Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>;
        environments:Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>;
        name:string;
        description:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        commands:Array<org.eclipse.che.api.machine.shared.dto.CommandDto>;
        defaultEnv:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            this.projects = new Array<org.eclipse.che.api.workspace.shared.dto.ProjectConfigDto>();
            if (__jsonObject.projects) {
                __jsonObject.projects.forEach((item) => {
                    this.projects.push(new org.eclipse.che.api.workspace.shared.dto.ProjectConfigDtoImpl(item));
                });
            }
            this.environments = new Array<org.eclipse.che.api.workspace.shared.dto.EnvironmentDto>();
            if (__jsonObject.environments) {
                __jsonObject.environments.forEach((item) => {
                    this.environments.push(new org.eclipse.che.api.workspace.shared.dto.EnvironmentDtoImpl(item));
                });
            }
            if (__jsonObject.name) {
                this.name = __jsonObject.name}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            this.commands = new Array<org.eclipse.che.api.machine.shared.dto.CommandDto>();
            if (__jsonObject.commands) {
                __jsonObject.commands.forEach((item) => {
                    this.commands.push(new org.eclipse.che.api.machine.shared.dto.CommandDtoImpl(item));
                });
            }
            if (__jsonObject.defaultEnv) {
                this.defaultEnv = __jsonObject.defaultEnv}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto.event {
    export interface MachineProcessEvent {
        setError(arg0 : string): void;
        withError(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent;
        setProcessId(arg0 : number): void;
        getProcessId(): number;
        setEventType(arg0 : string): void;
        withEventType(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent;
        getError(): string;
        withProcessId(arg0 : number): org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent;
        getMachineId(): string;
        setMachineId(arg0 : string): void;
        withMachineId(arg0 : string): org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent;
        getEventType(): string;
    }
}

export module org.eclipse.che.api.machine.shared.dto.event {
    export class MachineProcessEventImpl implements org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent {
        setError(error:string) : void {
            this.error=error;
        }
        withError(error:string) : org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent {
            this.error=error;
            return this;
        }
        setProcessId(processId:number) : void {
            this.processId=processId;
        }
        getProcessId() : number {
            return this.processId;
        }
        setEventType(eventType:string) : void {
            this.eventType=eventType;
        }
        withEventType(eventType:string) : org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent {
            this.eventType=eventType;
            return this;
        }
        getError() : string {
            return this.error;
        }
        withProcessId(processId:number) : org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent {
            this.processId=processId;
            return this;
        }
        getMachineId() : string {
            return this.machineId;
        }
        setMachineId(machineId:string) : void {
            this.machineId=machineId;
        }
        withMachineId(machineId:string) : org.eclipse.che.api.machine.shared.dto.event.MachineProcessEvent {
            this.machineId=machineId;
            return this;
        }
        getEventType() : string {
            return this.eventType;
        }
        machineId:string;
        processId:number;
        eventType:string;
        error:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.machineId) {
                this.machineId = __jsonObject.machineId}
            if (__jsonObject.processId) {
                this.processId = __jsonObject.processId}
            if (__jsonObject.eventType) {
            }
            if (__jsonObject.error) {
                this.error = __jsonObject.error}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface NewSnapshotDescriptor {
        setDescription(arg0 : string): void;
        getDescription(): string;
        withDescription(arg0 : string): org.eclipse.che.api.machine.shared.dto.NewSnapshotDescriptor;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class NewSnapshotDescriptorImpl implements org.eclipse.che.api.machine.shared.dto.NewSnapshotDescriptor {
        setDescription(description:string) : void {
            this.description=description;
        }
        getDescription() : string {
            return this.description;
        }
        withDescription(description:string) : org.eclipse.che.api.machine.shared.dto.NewSnapshotDescriptor {
            this.description=description;
            return this;
        }
        description:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
        }
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export interface ProjectProblemDto {
        getMessage(): string;
        getCode(): number;
        setCode(arg0 : number): void;
        withCode(arg0 : number): org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto;
        withMessage(arg0 : string): org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto;
        setMessage(arg0 : string): void;
    }
}

export module org.eclipse.che.api.workspace.shared.dto {
    export class ProjectProblemDtoImpl implements org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto {
        getMessage() : string {
            return this.message;
        }
        getCode() : number {
            return this.code;
        }
        setCode(code:number) : void {
            this.code=code;
        }
        withCode(code:number) : org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto {
            this.code=code;
            return this;
        }
        withMessage(message:string) : org.eclipse.che.api.workspace.shared.dto.ProjectProblemDto {
            this.message=message;
            return this;
        }
        setMessage(message:string) : void {
            this.message=message;
        }
        code:number;
        message:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.code) {
                this.code = __jsonObject.code}
            if (__jsonObject.message) {
                this.message = __jsonObject.message}
        }
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export interface SnapshotDto {
        setType(arg0 : string): void;
        withId(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setDev(arg0 : boolean): void;
        withDev(arg0 : boolean): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        withType(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setDescription(arg0 : string): void;
        withWorkspaceId(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        withMachineName(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setId(arg0 : string): void;
        withDescription(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setNamespace(arg0 : string): void;
        withNamespace(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        withLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setWorkspaceId(arg0 : string): void;
        setMachineName(arg0 : string): void;
        withCreationDate(arg0 : number): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        withEnvName(arg0 : string): org.eclipse.che.api.machine.shared.dto.SnapshotDto;
        setCreationDate(arg0 : number): void;
        setEnvName(arg0 : string): void;
        getId(): string;
        getType(): string;
        isDev(): boolean;
        getWorkspaceId(): string;
        getMachineName(): string;
        getDescription(): string;
        getNamespace(): string;
        getEnvName(): string;
        getCreationDate(): number;
        setLinks(arg0 : Array<org.eclipse.che.api.core.rest.shared.dto.Link>): void;
        getLinks(): Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
    }
}

export module org.eclipse.che.api.machine.shared.dto {
    export class SnapshotDtoImpl implements org.eclipse.che.api.machine.shared.dto.SnapshotDto {
        setType(type:string) : void {
            this.type=type;
        }
        withId(id:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.id=id;
            return this;
        }
        setDev(dev:boolean) : void {
            this.dev=dev;
        }
        withDev(dev:boolean) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.dev=dev;
            return this;
        }
        withType(type:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.type=type;
            return this;
        }
        setDescription(description:string) : void {
            this.description=description;
        }
        withWorkspaceId(workspaceId:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.workspaceId=workspaceId;
            return this;
        }
        withMachineName(machineName:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.machineName=machineName;
            return this;
        }
        setId(id:string) : void {
            this.id=id;
        }
        withDescription(description:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.description=description;
            return this;
        }
        setNamespace(namespace:string) : void {
            this.namespace=namespace;
        }
        withNamespace(namespace:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.namespace=namespace;
            return this;
        }
        withLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.links=links;
            return this;
        }
        setWorkspaceId(workspaceId:string) : void {
            this.workspaceId=workspaceId;
        }
        setMachineName(machineName:string) : void {
            this.machineName=machineName;
        }
        withCreationDate(creationDate:number) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.creationDate=creationDate;
            return this;
        }
        withEnvName(envName:string) : org.eclipse.che.api.machine.shared.dto.SnapshotDto {
            this.envName=envName;
            return this;
        }
        setCreationDate(creationDate:number) : void {
            this.creationDate=creationDate;
        }
        setEnvName(envName:string) : void {
            this.envName=envName;
        }
        getId() : string {
            return this.id;
        }
        getType() : string {
            return this.type;
        }
        isDev() : boolean {
            return this.dev;
        }
        getWorkspaceId() : string {
            return this.workspaceId;
        }
        getMachineName() : string {
            return this.machineName;
        }
        getDescription() : string {
            return this.description;
        }
        getNamespace() : string {
            return this.namespace;
        }
        getEnvName() : string {
            return this.envName;
        }
        getCreationDate() : number {
            return this.creationDate;
        }
        setLinks(links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>) : void {
            this.links=links;
        }
        getLinks() : Array<org.eclipse.che.api.core.rest.shared.dto.Link> {
            return this.links;
        }
        dev:boolean;
        envName:string;
        namespace:string;
        description:string;
        links:Array<org.eclipse.che.api.core.rest.shared.dto.Link>;
        id:string;
        type:string;
        creationDate:number;
        machineName:string;
        workspaceId:string;
        __jsonObject : any;
        constructor(__jsonObject?: any) {
            if (__jsonObject) {
                this.__jsonObject = __jsonObject;
            }
            if (__jsonObject.dev) {
                this.dev = __jsonObject.dev}
            if (__jsonObject.envName) {
                this.envName = __jsonObject.envName}
            if (__jsonObject.namespace) {
                this.namespace = __jsonObject.namespace}
            if (__jsonObject.description) {
                this.description = __jsonObject.description}
            this.links = new Array<org.eclipse.che.api.core.rest.shared.dto.Link>();
            if (__jsonObject.links) {
                __jsonObject.links.forEach((item) => {
                    this.links.push(new org.eclipse.che.api.core.rest.shared.dto.LinkImpl(item));
                });
            }
            if (__jsonObject.id) {
                this.id = __jsonObject.id}
            if (__jsonObject.type) {
                this.type = __jsonObject.type}
            if (__jsonObject.creationDate) {
                this.creationDate = __jsonObject.creationDate}
            if (__jsonObject.machineName) {
                this.machineName = __jsonObject.machineName}
            if (__jsonObject.workspaceId) {
                this.workspaceId = __jsonObject.workspaceId}
        }
    }
}
