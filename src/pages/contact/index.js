import Rootlayout from "@/components/Layout/Rootlayout"


export default function Contact() {
  return (
    <div>contact</div>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Rootlayout>
      {page}
    </Rootlayout>
  )
}