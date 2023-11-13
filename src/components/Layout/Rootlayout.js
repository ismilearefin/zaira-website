import Header from "../Header/Header";


export default function Rootlayout({children}) {
  return (
    <div className="position-relative">
        <Header></Header>
        {children}
        <p>Footer</p>
    </div>
  )
}
