import { Field, Input } from '@headlessui/react'
import clsx from 'clsx'

type InputType = {
    type:string,
    label:string,
    onchange?:(e:any) => void | null,
    padding?:string,
    placeHolder?:string
}

export default function FieldInput({ type, label,onchange , padding,placeHolder }: InputType) {
    return (
        <>
            <Field>
                <Input
                    name={label}
                    aria-label={label}
                    type={type as string}
                    placeholder={placeHolder || label as string}
                    autoComplete='off'
                    onChange={onchange}
                    className={clsx(
                        `block w-full rounded-lg border border-gray-200 bg-white px-3 ${padding||"py-1.5"} text-sm/6 `,
                        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-gray-300'
                    )}
                />
            </Field>
        </>
    )
}