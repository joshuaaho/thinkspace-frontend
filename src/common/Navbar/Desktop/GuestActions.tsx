
import Button from '@common/Button'
import { useNavigate } from 'react-router-dom'

const GuestActions = () => {
  const navigate = useNavigate()
  return (
          <>
            <Button variant="primary" size="sm" onClick={() => navigate("/login")}>
              Login
            </Button>
           <Button variant="primary" size="sm" className="ml-2" onClick={() => navigate("/register")} >
              Register
            </Button>
          </>
  )
}

export default GuestActions