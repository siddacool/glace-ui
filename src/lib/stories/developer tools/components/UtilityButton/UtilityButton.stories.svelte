<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import UtilityButton from './UtilityButton.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Icon from '@iconify/svelte';
  import { fn } from '@storybook/test';

  export const storyUtilityButtonArgTypes: StoryBookArgTypes = {
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: UtilityButton,
    tags: ['autodocs'],
    argTypes: storyUtilityButtonArgTypes,
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- Button with default style -->
<Story name="Default">
  <UtilityButton><Icon icon="mdi:eye" width="24" height="24" /></UtilityButton>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <UtilityButton disabled><Icon icon="mdi:eye" width="24" height="24" /></UtilityButton>
</Story>
