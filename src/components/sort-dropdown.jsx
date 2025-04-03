import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export const SortDropdown = ({ options, timeFilter, setTimeFilter }) => {
    const selectedOption = options.find((opt) => opt.value === timeFilter);

    return (
        <Listbox
            value={timeFilter}
            onChange={setTimeFilter}
        >
            <div className="relative z-10 bg-white dark:bg-slate-900">
                {/* Nút bấm */}
                <Listbox.Button className="flex h-10 w-full items-center justify-between gap-x-2 rounded-lg border border-slate-300 px-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:w-80">
                    {selectedOption?.label}
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                </Listbox.Button>

                {/* Danh sách lựa chọn */}
                <Listbox.Options className="absolute mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.value}
                            value={option.value}
                            className={({ active }) =>
                                `cursor-pointer px-3 py-2 ${active ? "bg-cyan-600 text-white" : "text-slate-900 dark:text-white"}`
                            }
                        >
                            {option.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
};
