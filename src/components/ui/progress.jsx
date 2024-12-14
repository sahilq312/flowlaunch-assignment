import * as React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../../utils/lib";

const Progress = React.forwardRef((props, ref) => {
  const { className, value, ...restProps } = props;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-1 w-full overflow-hidden rounded-full bg-gray-600",
        className
      )}
      {...restProps}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-grey-200 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

// Define PropTypes
Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

export { Progress };
