import {
  ComponentOptions,
  FunctionalComponentOptions,
  WatchOptions,
  WatchHandler,
  DirectiveOptions,
  DirectiveFunction
} from "./options.d";
import { VNode, VNodeData, VNodeChildren } from "./vnode";
import { PluginFunction, PluginObject } from "./plugin";

export declare class Vue {

  constructor(options?: ComponentOptions<Vue>);

  $data: Object;
  readonly $el: HTMLElement;
  readonly $options: ComponentOptions<this>;
  readonly $parent: Vue;
  readonly $root: Vue;
  readonly $children: Vue[];
  readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[]};
  readonly $slots: { [key: string]: VNode[] };
  readonly $isServer: boolean;

  $mount(elementOrSelector?: Element | String, hydrating?: boolean): this;
  $forceUpdate(): void;
  $destroy(): void;
  $set: typeof Vue.set;
  $delete: typeof Vue.delete;
  $watch(
    expOrFn: string | Function,
    callback: WatchHandler<this>,
    options?: WatchOptions
  ): (() => void);
  $on(event: string, callback: Function): this;
  $once(event: string, callback: Function): this;
  $off(event?: string, callback?: Function): this;
  $emit(event: string, ...args: any[]): this;
  $nextTick(callback?: (this: this) => void): void;
  $createElement(
    tag?: string | Vue,
    data?: VNodeData,
    children?: VNodeChildren,
    namespace?: string
  ): VNode;


  static config: {
    silent: boolean;
    optionMergeStrategies: any;
    devtools: boolean;
    errorHandler(err: Error, vm: Vue): void;
    keyCodes: { [key: string]: number };
  }

  static extend(options: ComponentOptions<Vue>): typeof Vue;
  static nextTick(callback: () => void, context?: any[]): void;
  static set<T>(object: Object, key: string, value: T): T;
  static set<T>(array: T[], key: number, value: T): T;
  static delete(object: Object, key: string): void;

  static directive(
    id: string,
    definition?: DirectiveOptions | DirectiveFunction
  ): DirectiveOptions;
  static filter(id: string, definition?: Function): Function;
  static component(
    id: string,
    definition?: ComponentOptions<Vue> | FunctionalComponentOptions | typeof Vue
  ): typeof Vue;

  static use<T>(plugin: PluginObject<T> | PluginFunction<T>, options?: T): void;
  static mixin(mixin: typeof Vue | ComponentOptions<Vue>): void;
  static compile(template: string): {
    render(createElement: typeof Vue.prototype.$createElement): VNode;
    staticRenderFns: (() => VNode)[];
  };
}
