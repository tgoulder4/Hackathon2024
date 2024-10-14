"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl } from "./form"
import { ControllerRenderProps, UseFormReturn } from "react-hook-form"

type Props = {
    options: {
        value: string
        label: string
    }[],
    wholeObjects?: any[],
    setsTheValueOfElements?: string[],
    givesElementsWholeObjectProperties?: string[],
    thisComboBoxValueRepresentsWholeObjectProperty?: string,
    thisElementName: string,
    selectingA: string,
    form: UseFormReturn<any>,
    field: ControllerRenderProps<any>
}
/**
 * 
 * @param options: The options that the user can select from, containing a value and a label
 * @param selectingA: The name of the thing that the user is selecting
 * @param setsTheValueOfElements: The NAME of the element in the form that the value of this component will set
 * @param givesElementsWholeObjectProperties: The attribute from wholeObjects that this component will set on the element
 * @returns 
 */
export function FormComboBox({
    options,
    selectingA,
    wholeObjects,
    setsTheValueOfElements, field, givesElementsWholeObjectProperties, thisElementName, thisComboBoxValueRepresentsWholeObjectProperty, form, ...props }: Props) {
    const [open, setOpen] = React.useState(false)
    const { value, onChange } = field;
    // console.log("Options: ", options);
    if (setsTheValueOfElements && !form) throw new Error("You must pass a form to set the value of the element");
    function handleSetValue(newValue: string) {
        if (newValue == "") return;
        if (newValue !== value) {
            console.log("Setting value of ", thisElementName, " to ", newValue);
            form.setValue(thisElementName, newValue);
            if (setsTheValueOfElements) {
                if (givesElementsWholeObjectProperties && setsTheValueOfElements.length !== givesElementsWholeObjectProperties.length) throw new Error("The length of setsTheValueOfElements and givesElementsWholeObjectProperties must be the same")
                if (!thisComboBoxValueRepresentsWholeObjectProperty) throw new Error("You must pass a thisComboBoxValueRepresentsWholeObjectProperty to set the value of the FormComboBox element");
                if (!wholeObjects) throw new Error("You must pass wholeObjects to set the value of the FormComboBox element");
                if (givesElementsWholeObjectProperties) {
                    // console.log("Whole objects passed: ", wholeObjects);
                    const wholeObjectElementCorrespondingToValue = wholeObjects.find((obj) => (obj as any)[thisComboBoxValueRepresentsWholeObjectProperty] === newValue);
                    if (!wholeObjectElementCorrespondingToValue) throw new Error("The value of the FormComboBox does not correspond to any whole object element. Value was " + newValue);
                    // console.log("Whole object element corresponding to value: ", wholeObjectElementCorrespondingToValue);
                    setsTheValueOfElements.forEach((otherElementToSetTheValueOf, index) => {
                        const propertyToGiveTheOtherElement = (wholeObjectElementCorrespondingToValue as any)[givesElementsWholeObjectProperties[index]];
                        // console.log("Setting value of ", otherElementToSetTheValueOf, " to ", propertyToGiveTheOtherElement);
                        form.setValue(otherElementToSetTheValueOf, propertyToGiveTheOtherElement || "")
                    })
                } else {
                    for (const otherElementToSetTheValueOf of setsTheValueOfElements) {
                        form.setValue(otherElementToSetTheValueOf, newValue)
                    }
                }
            }
            onChange(newValue)
            setOpen(false);
        }
    }

    if (setsTheValueOfElements && !form) throw new Error("You must pass a form to set the value of the element")
    return (
        <Popover {...props} open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                        {...field}
                    >
                        {value
                            ? options.find((opt) => opt.value === value)?.label
                            : `Select ${selectingA}...`}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No {selectingA} found.</CommandEmpty>
                    <CommandGroup>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                value={option.value}
                                onSelect={(currentValue) => {
                                    handleSetValue(currentValue === value ? "" : currentValue)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === option.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {option.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}