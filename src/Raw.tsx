import { MfmNode } from "mfm-js"
import { MfmBasicProps } from "."

const Raw = ({ nodes }: MfmBasicProps & { nodes?: MfmNode[] }) =>
  nodes?.map((node, i) => (
    <pre key={i}>
      <code>{JSON.stringify(node, null, "  ")}</code>
    </pre>
  ))

export default Raw
