import * as BaseSwitch from "@radix-ui/react-switch";
import classNames from "classnames";
import type { SwitchProps } from "./type";
import "./switch.css";

/**
 * A customizable switch component.
 *
 * @example
 * <Switch checked={true} onCheckedChange={() => {}} />
 */
export function Switch({ className, ...restProps }: SwitchProps) {
  return (
    <BaseSwitch.Root
      className={classNames("pedal-SwitchRoot", className)}
      {...restProps}
    >
      <BaseSwitch.Thumb className="pedal-SwitchThumb" />
    </BaseSwitch.Root>
  );
}

Switch.displayName = "Switch";
