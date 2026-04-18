import { Field, Input } from '@headlessui/react'
import clsx from 'clsx'

type InputType = {
    type:string,
    label:string,
    onchange:(e:any) => void | null
}

export default function FieldInput({ type, label,onchange }: InputType) {
    return (
        <>
            <Field>
                <Input
                    type={type as string}
                    placeholder={label as string}
                    autoComplete='off'
                    onChange={onchange}
                    className={clsx(
                        'block w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm/6 ',
                        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-gray-300'
                    )}
                />
            </Field>
        </>
    )
}