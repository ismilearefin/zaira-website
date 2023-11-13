import Rootlayout from "@/components/Layout/Rootlayout"


export default function Features() {
  return (
    <div>Features</div>
  )
}

Features.getLayout = function getLayout(page) {
  return (
    <Rootlayout>
      {page}
    </Rootlayout>
  )
}