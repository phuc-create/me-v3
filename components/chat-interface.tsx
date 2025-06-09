'use client'

import { useState } from 'react'
import { Button } from '@v3/components/ui/button'
import { ScrollArea } from '@v3/components/ui/scroll-area'
import { Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react'
import { cn } from '@v3/lib/utils'

interface Message {
  role: 'agent' | 'user'
  contents: string[]
  timestamp: string
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
        "Hi, I'd like to give you cuple of informative infor about me.",
        "I'm a software developer"
      ],
      timestamp: '4:08:37 PM'
    },
    {
      role: 'agent',
      contents: [
        "Please hold for a second.\n\nOk, I can help you with that\n\nI'm pulling up your current bill information\n\nYour current bill is $150, and it is due on August 31, 2024.\n\nIf you need more details, feel free to ask!"
      ],
      timestamp: '4:08:37 PM'
    }
  ])

  return (
    <div className="flex flex-1 flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex max-w-[80%] gap-2',
                message.role === 'user' && 'ml-auto justify-end'
              )}
            >
              {message.role === 'agent' && (
                <div className="bg-primary h-8 w-8 flex-shrink-0 rounded-full" />
              )}
              <div
                className={cn(
                  'space-y-1',
                  message.role === 'user' ? 'flex flex-col items-end' : ''
                )}
              >
                <div
                  className={cn(
                    'flex items-center gap-2',
                    message.role === 'user' ? 'justify-end' : ''
                  )}
                >
                  <span className="text-sm font-medium">
                    {message.role === 'agent' ? 'GenerativeAgent' : 'G5'}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {message.timestamp}
                  </span>
                </div>
                {message.contents.map((content, indez) => (
                  <div key={indez} className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm whitespace-pre-wrap">{content}</p>
                  </div>
                ))}
                {message.role === 'agent' && (
                  <div className="flex items-center gap-2">
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
