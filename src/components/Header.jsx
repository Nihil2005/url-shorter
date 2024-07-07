import React from 'react'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react'


const Header = () => {
    const navigate = useNavigate();
    const user = false;
  return (
<nav className='py-4 flex justify-between items-center p-9 '>
    <Link to="/">
    <img src='data:image/png;base64,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' className='h-16 rounded-full' alt='Logo'/>
    </Link>

<div>
    {!user ?
    <Button onClick={()=> navigate("/auth")} >Login</Button>
    :(
        <DropdownMenu>
  <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>


  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
 
    <DropdownMenuItem>My Links</DropdownMenuItem>
    <DropdownMenuItem className='text-red-400' >
       <LogOut className='mr-2 h-4 w-4' /> Log-Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    )

  }
</div>



</nav>
  )
}

export default Header