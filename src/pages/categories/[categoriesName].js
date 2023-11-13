import Rootlayout from "@/components/Layout/Rootlayout"


export default function CategoryPage() {
  return (
    <div>CategoriesOne</div>
  )
}

CategoryPage.getLayout = function getLayout(page) {
  return (
    <Rootlayout>
      {page}
    </Rootlayout>
  )
}