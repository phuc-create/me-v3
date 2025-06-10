'use client'

import { useState } from 'react'
import { Button } from '@v3/components/ui/button'
import { ScrollArea } from '@v3/components/ui/scroll-area'
import { Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import CodeReveal from './code-reveal'

interface Message {
  role: 'agent' | 'user'
  contents: string[]
  timestamp: string
}

const AgentMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex max-w-[80%] gap-2">
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>Agent</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">Lovely Agent</span>
          <span className="text-muted-foreground text-xs">
            {message.timestamp}
          </span>
        </div>
        {message.contents.map((content, indez) => (
          <div
            key={indez}
            className="group flex items-center justify-center gap-1.5"
          >
            <div className="bg-muted/50 flex flex-col rounded-lg">
              <p className="border-b p-2 text-sm whitespace-pre-wrap">
                {content}
              </p>
              <CodeReveal code="text-sm whitespace-pre-wrap" className="px-2" />
            </div>
            <div className="flex cursor-pointer items-center gap-2 opacity-0 group-hover:opacity-100">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        {/* <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </div>
  )
}

const UserMessage = ({ message }: { message: Message }) => {
  return (
    <div className="ml-auto flex max-w-[80%] justify-end gap-2">
      <div className="flex flex-col items-end space-y-1">
        <div className="flex items-center justify-end gap-2">
          <span className="text-xs font-medium">Nguyen Huu Phuc (Sam)</span>
          <span className="text-muted-foreground text-xs">
            {message.timestamp}
          </span>
        </div>
        {message.contents.map((content, indez) => (
          <div key={indez} className="bg-muted/50 flex flex-col rounded-lg">
            <p className="border-b p-2 text-sm whitespace-pre-wrap">
              {content}
            </p>
            <CodeReveal code="text-sm whitespace-pre-wrap" className="px-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ChatInterface() {
  const [messages] = useState<Message[]>([
    {
      role: 'agent',
      contents: ['Can I know more about you, Sam?'],
      timestamp: '4:08:28 PM'
    },
    {
      role: 'user',
      contents: [
        'I`m born and bred in Dak Lak ٩(◕‿◕｡)۶\nLiving in Ho Chi Minh City now (°◡°♡)\nIn progress learing Golang (๑•̀ㅂ•́)و\nVide coding on Typescript (◍•ᴗ•◍)\nFront-end Developer (☆▽☆).',
        "let's connect."
      ],
      timestamp: '4:08:37 PM'
    }
  ])

  return (
    <div className="flex flex-1 flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) =>
            message.role === 'user' ? (
              <UserMessage message={message} key={index} />
            ) : (
              <AgentMessage message={message} key={index} />
            )
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
