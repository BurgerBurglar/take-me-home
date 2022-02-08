export interface Option {
  value: string;
  label: string;
}
const getSelectOptions = (values?: string[]): Option[] =>
  values
    ?.filter((value) => value.length > 0)
    .map((value) => ({
      value: value,
      label: value[0].toUpperCase() + value.slice(1),
    })) ?? [];

export default getSelectOptions;
