import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import {
  BellIcon, HamburgerMenuIcon, GearIcon,
  ViewNoneIcon, PlusIcon, Cross1Icon, ExternalLinkIcon
} from '@radix-ui/react-icons';
import * as Avatar from '@radix-ui/react-avatar';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <nav className='py-2 px-4 flex items-center border-b border-neutral-700'>
      <div className='flex items-center'>
        <Avatar.Root className='mr-2'>
          <Avatar.Fallback className='flex rounded-full h-5 w-5 bg-green-400'></Avatar.Fallback>
        </Avatar.Root>
        <span>Prashant Kumar</span>
      </div>
      <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
        <Dialog.Trigger 
          className={
            `flex items-center text-neutral-400 justify-center 
            ml-auto h-8 w-8 rounded-full border border-neutral-700
            transition duration-150 hover:border-neutral-400 hover:text-neutral-200 hover:bg-neutral-800
            `
          }
        >
          <span>
            <BellIcon/>
          </span>
        </Dialog.Trigger>
        <AnimatePresence>
          { isOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild className='fixed inset-0 bg-neutral-900'>
                <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:0.7}}
                  exit={{opacity:0}}
                ></motion.div>
              </Dialog.Overlay>
                <Dialog.Content className={
                  `fixed bottom-0 left-0 h-3/4 w-full rounded-t-md overflow-hidden border border-neutral-700`
                  }
                  asChild
                >
                  <motion.div
                    initial={{opacity: 0, y:'100%'}}
                    animate={{opacity: 1, y:0}}
                    exit={{opacity: 0, y:'100%'}}
                    transition={{ ease: [0.32, 0.72, 0, 1]}}
                  >
                    <NotificationPanel/>
                  </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className={
            `group flex items-center text-neutral-400 justify-center 
             ml-2 h-8 w-8 rounded-full border border-neutral-700 
            transition duration-150 hover:border-neutral-400 hover:text-neutral-200 hover:bg-neutral-800
             `
          }
        >
          <span className='group-data-[state=closed]:block hidden'>
            <HamburgerMenuIcon/>
          </span>
          <span className='group-data-[state=open]:block hidden'>
            <Cross1Icon/>
          </span>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content 
            // className='bg-blue-950'
            className='bg-neutral-950'
            sideOffset={10}
          >
            <div className='w-screen h-screen'>
              <MenuContent/>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
    <section className='h-screen flex items-center justify-center text-sm text-neutral-400'>
      <span>Click on the Bell or Menu Icon</span>
    </section>
  </>
  )
}

function MenuContent(){
  return (
    <div className='flex flex-col px-2'>
      <button 
        className={
          `w-full h-10 text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-md my-2
          hover:bg-neutral-800/60
          `
        }
      >
        Contact
      </button>
      <div className='flex items-center justify-between py-4 border-b border-neutral-700'>
        <div>
          <p className='text-neutral-300'>Prashant Kumar</p>
          <small className='block text-neutral-400'>prash.kumar047@gmail.com</small>
        </div>
        <span className='flex items-center justify-center'>
          <Avatar.Root className='mr-2'>
            <Avatar.Fallback className='flex rounded-full h-5 w-5 bg-green-400'></Avatar.Fallback>
          </Avatar.Root>
        </span>
      </div>
      <DropDownMenuItem>
        Dashboard
      </DropDownMenuItem>
      <DropDownMenuItem>
        Settings
      </DropDownMenuItem>
      <DropDownMenuItem>
        <div className='flex items-center justify-between'>
          <span>New Team</span>
          <span className='mx-2'><PlusIcon/></span>
        </div>
      </DropDownMenuItem>
      <DropDownMenuItem>
        Theme
      </DropDownMenuItem>
      <DropDownMenuItem>
        Log Out
      </DropDownMenuItem>
      <h1 className='mt-8 mb-4 text-xl'>Resources</h1>
      <DropDownMenuItem>
        Theme
      </DropDownMenuItem>
      <DropDownMenuItem>
        Help
      </DropDownMenuItem>
      <DropDownMenuItem>
        Documentation
      </DropDownMenuItem>
      <DropDownMenuItem>
        <div className='flex items-center justify-between'>
          <span>Vercel Homepage</span>
          <span className='mx-2'><ExternalLinkIcon/></span>
        </div>
      </DropDownMenuItem>
    </div>
  )
}

function DropDownMenuItem({
  children
}:{
  children: ReactNode
}){
  return (
    <DropdownMenu.Item 
      className={
        `py-3 border-b border-neutral-700 text-neutral-400
        hover:bg-neutral-800/40 hover:cursor-pointer
        `
      }
    >
      { children }
    </DropdownMenu.Item>
  );
}

function NotificationPanel(){
  return (
    <div className='h-full'>
      <Tabs.Root defaultValue='inbox' className='flex flex-col h-full'>
        <div className='flex items-center justify-between px-4 border-b border-neutral-700'>
          <Tabs.List>
            <Tabs.Trigger value="inbox" className='group relative py-4 mx-2 text-sm text-neutral-400'>
              Inbox
              <span className='hidden group-data-[state=active]:block absolute w-full h-[2px] bg-neutral-200 bottom-0 left-0 rounded-t-lg'/>
            </Tabs.Trigger>
            <Tabs.Trigger value="archive" className='group relative py-4 mx-2 text-sm text-neutral-400'>
              Archive
              <span className='hidden group-data-[state=active]:block absolute w-full h-[2px] bg-neutral-200 bottom-0 left-0 rounded-t-lg'/>
            </Tabs.Trigger>
          </Tabs.List>
          <span>
            <GearIcon/>
          </span>
        </div>
        <div className='p-4 flex-1'>
          <Tabs.Content value="inbox" className='h-full'>
            <div className='flex flex-col justify-center items-center text-neutral-400 w-full h-full'>
              <span className='mb-4 flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800'>
                <ViewNoneIcon/>
              </span>
              <small>No new notifications</small>
            </div>
          </Tabs.Content>
          <Tabs.Content value="archive" className='h-full'>
            <div className='flex flex-col justify-center items-center text-neutral-400 w-full h-full'>
              <small>Lol nothing here XD</small>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  )
}