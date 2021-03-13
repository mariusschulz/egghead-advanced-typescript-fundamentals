type MarginProperty =
  | "margin-block-start"
  | "margin-block-end"
  | "margin-inline-start"
  | "margin-inline-end";

type MarginUnit = "px" | "vh" | "vw";
type MarginValue = `${number}${MarginUnit}`;
type MarginDeclaration = [MarginProperty, MarginValue];

const margin: MarginDeclaration = ["margin-block-start", "20vh"];
