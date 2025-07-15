
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="p-2 border-t border-base-300">
        <button
          className="btn btn-ghost btn-sm w-full"
          onClick={() => navigate("/notifications")}
        >
          View all notifications
        </button>
      </div>
  )
}

export default Footer