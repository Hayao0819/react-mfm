import { atom, useAtom, useAtomValue } from "jotai"
import { parse, parseSimple, type MfmNode } from "mfm-js"
import { type FC } from "react"
import Node from "./Node"
import { type CustomEmojiProps } from "./components/CustomEmoji"
import { type HashtagProps } from "./components/Hashtag"
import { type MentionProps } from "./components/Mention"
import "./style.css"
import Raw from "./Raw"

////////////////////////////////////////////////////////////////

// for internal use
export type MfmBasicProps = {
  plain?: boolean
  nowrap?: boolean
  nyaize?: boolean | "respect"
}

const MfmBase =
  (parser: (input: string) => MfmNode[]) =>
  ({ text, ...props }: MfmBasicProps & { text: string }) => <Node nodes={parser(text)} {...props} />

export const Mfm = MfmBase(parse)
export const MfmSimple = MfmBase(parseSimple)

export default Mfm

const MfmRawBase =
  (parser: (input: string) => MfmNode[]) =>
  ({ text }: { text: string }) => <Raw nodes={parser(text)} />

export const MfmRaw = MfmRawBase(parse)
export const MfmRawSimple = MfmRawBase(parseSimple)

////////////////////////////////////////////////////////////////

export { CustomEmojiProps, HashtagProps, MentionProps }

export type MfmConfig = {
  // mfm
  advanced: boolean
  animation: boolean

  // components
  CustomEmoji?: FC<CustomEmojiProps>
  Hashtag?: FC<HashtagProps>
  Mention?: FC<MentionProps>

  // system
  assetsBase?: string
}

export const mfmConfigAtom = atom<MfmConfig>({
  advanced: true,
  animation: true,
})

export const useMfmConfig = () => useAtom(mfmConfigAtom)
export const useMfmConfigValue = () => useAtomValue(mfmConfigAtom)
