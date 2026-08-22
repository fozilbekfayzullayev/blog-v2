type DateInput = string | Date | null | undefined;

export function customTimeFormat(time: DateInput): string {
  if (!time) return "";

  const date = new Date(time);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  const customFormat = `${day} ${month},${year}`;

  return customFormat;
}
