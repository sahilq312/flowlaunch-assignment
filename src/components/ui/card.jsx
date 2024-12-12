import * as React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { cn } from "../../utils/lib";

const Card = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...restProps}
    />
  );
});
Card.displayName = "Card";

Card.propTypes = {
  className: PropTypes.string, // Define PropTypes for className
};

const CardHeader = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...restProps}
    />
  );
});
CardHeader.displayName = "CardHeader";

CardHeader.propTypes = {
  className: PropTypes.string, // Define PropTypes for className
};

const CardTitle = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...restProps}
    />
  );
});
CardTitle.displayName = "CardTitle";

CardTitle.propTypes = {
  className: PropTypes.string, // Define PropTypes for className
};

const CardDescription = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...restProps}
    />
  );
});
CardDescription.displayName = "CardDescription";

CardDescription.propTypes = {
  className: PropTypes.string, // Define PropTypes for className
};

const CardContent = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...restProps} />
  );
});
CardContent.displayName = "CardContent";

CardContent.propTypes = {
  className: PropTypes.string, // Define PropTypes for className
};

const CardFooter = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...restProps}
    />
  );
});
CardFooter.displayName = "CardFooter";

CardFooter.propTypes = {
  className: PropTypes.string, 
};

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
