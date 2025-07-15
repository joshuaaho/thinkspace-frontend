import { useCurrentUserQuery } from "@api/user/query";

import { SettingsSkeleton } from "@common/Skeletons";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
import Form from "@pages/Settings/Form";

function Settings() {
  const { data: user, isPending, error } = useCurrentUserQuery();

  if (isPending) {
    return <SettingsSkeleton />;
  }
  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }

  return <Form user={user} />;
}

export default Settings;
