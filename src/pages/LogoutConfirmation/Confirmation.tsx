  import { useNavigate } from "react-router-dom";
import Button from "@common/Button";
import { useLogoutMutation } from "@api/auth/mutations";
function LogoutConfirmation() {
  const navigate = useNavigate();
  const { mutateAsync: logout } = useLogoutMutation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100/50">
      <div className="card bg-base-100 shadow-xl max-w-md w-full">
        <div className="card-body text-center space-y-4">
          <h2 className="card-title text-2xl justify-center">Confirm Logout</h2>
          <p className="text-base-content/70">
            Are you sure you want to log out? You'll need to log in again to
            access your account.
          </p>
          <div className="card-actions justify-end space-x-2">
            <Button
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
                await logout({});
                navigate(-1);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmation;
