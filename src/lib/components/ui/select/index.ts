import { Select as SelectPrimitive } from "bits-ui";

import Group from "./select-group.svelte";
import Item from "./select-item.svelte";
import Content from "./select-content.svelte";
import Trigger from "./select-trigger.svelte";
import Separator from "./select-separator.svelte";
import ScrollDownButton from "./select-scroll-down-button.svelte";
import ScrollUpButton from "./select-scroll-up-button.svelte";
import GroupHeading from "./select-group-heading.svelte";

const Root = SelectPrimitive.Root;

export {
  Root,
  Group,
  Item,
  Content,
  Trigger,
  Separator,
  ScrollDownButton,
  ScrollUpButton,
  GroupHeading,
  //
  Root as Select,
  Group as SelectGroup,
  Item as SelectItem,
  Content as SelectContent,
  Trigger as SelectTrigger,
  Separator as SelectSeparator,
  ScrollDownButton as SelectScrollDownButton,
  ScrollUpButton as SelectScrollUpButton,
  GroupHeading as SelectGroupHeading,
};
