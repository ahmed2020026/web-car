import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ButtonClick from './ButtonClick'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
interface selectPropsType {
    father: string,
    children: string[]
}

export default function InputSelect({ father, children }: selectPropsType) {
    const [selected, setSelected] = useState('')

    return (
        <div>
            <Menu>
                <MenuButton className="w-full flex justify-between border border-gray-200 items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-medium text-gray-700 data-focus:outline data-focus:outline-white  data-open:bg-gray-200 cursor-pointer">
                    {father} <ChevronDown size={15} />
                </MenuButton>
                <p className={` ${selected ? 'text-gray-600' : 'text-gray-400'} px-3 py-1.5 text-sm font-normal text-left`}>{selected || 'Please Select location'}</p>
                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl shadow-lg p-1 text-sm/6 text-gray-500 bg-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                >
                    <MenuItem>
                        <ButtonClick onClick={() => setSelected('')} children={'none'} ClassName='w-full hover:text-gray-800' />
                    </MenuItem>
                    {Array.from(children).map((item , index) => (
                        <MenuItem key={index}>
                            <ButtonClick onClick={() => setSelected(item)} children={item as string} ClassName='w-full hover:text-gray-800' />
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </div>
    )
}