
const Online = () => {
  return (
    <div>在线</div>
  )
}

const Offline = () => {
  return (
    <div>离线</div>
  )
}

export default function Home(isLogin: any) {
  return (
    <div>
      {isLogin.state === true ?
        <Online />
        :
        <Offline />
      }
    </div>
  )
}
