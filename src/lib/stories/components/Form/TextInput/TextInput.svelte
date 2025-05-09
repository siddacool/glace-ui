<script lang="ts" module>
  export type TextInputType = 'text' | 'tel' | 'email' | 'password' | 'url' | 'number';

  export type TextInputFocusEvent = FocusEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type TextInputClipboardEvent = ClipboardEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';

  import type { ComponentRoundness, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';

  interface TextInputProps {
    /** Input type? */
    type?: TextInputType;
    /** Input ref */
    ref?: HTMLInputElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness | false;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Input value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
  }

  let {
    type = 'text',
    size = 'normal',
    roundness = '1x',
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    oninput,
    onchange,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    before,
    after,
    error = false,
    value = $bindable<string>(),
    placeholder,
    ref = $bindable<HTMLInputElement>(),
    readonly = false,
  }: TextInputProps = $props();

  let focused: boolean = $state(false);

  function onfocusMod(e: TextInputFocusEvent) {
    focused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: TextInputFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-TextInput', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
    <input
      {type}
      {name}
      {id}
      {disabled}
      {oninput}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {onpaste}
      {oncopy}
      {oncut}
      {placeholder}
      {readonly}
      bind:value
      bind:this={ref}
    />
  </InputEnclosure>
</div>

<style lang="scss">
  .dodo-ui-TextInput {
    input {
      flex: 1;
      border: 0;
      outline: 0;
      height: 100%;
      background-color: transparent;
      font-family: inherit;
      color: inherit;
      letter-spacing: 0.3px;
    }

    &.size {
      &--normal {
        input {
          font-size: 1rem;
          padding: 0 12px;
        }
      }

      &--small {
        input {
          padding: 0 8px;
          font-size: 0.9rem;
        }
      }

      &--large {
        input {
          font-size: 1.1rem;
          padding: 0 14px;
        }
      }
    }
  }
</style>
