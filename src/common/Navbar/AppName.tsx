
import { Link } from 'react-router-dom'

const APP_NAME = "Thinkspace"

function AppName() {

  return (
    <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
      {APP_NAME}
    </Link>
  )
} 

export default AppName;
