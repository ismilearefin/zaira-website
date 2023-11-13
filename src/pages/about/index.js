import Rootlayout from "@/components/Layout/Rootlayout"


export default function About() {
  return (
    <div>About</div>
  )
}


About.getLayout = function getLayout(page) {
  return (
    <Rootlayout>
      {page}
    </Rootlayout>
  )
}