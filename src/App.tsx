import { useEffect, useState } from "react"
import { Button, Card, Description, ProductType } from "./components"
import { menuProvider } from "./providers/menuProvider"



function App() {
  const [menu, setMenu] = useState(0)
  const [list, setList] = useState<ProductType[]>([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setList(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="w-full h-full bg-fixed  bg-no-repeat scroll-auto bg-[length:100vw_50vh] bg-[url('https://catracalivre.com.br/wp-content/uploads/2019/09/cafe-paris-910x607.jpg')] pt-52">
      <div className=" w-full bg-20 min-h-96 flex justify-center">
        <div className="-mt-[50px] w-[70%] p-20 bg-10 rounded-xl">

          <Description />

          <div className="flex justify-center my-3">
            {
              menuProvider.map((item, index) => (<Button selected={menu === index} onClick={() => setMenu(index)}>{item.label}</Button>))
            }
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {list.map((product)=>(<Card key={product.id} item={product}/>))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
