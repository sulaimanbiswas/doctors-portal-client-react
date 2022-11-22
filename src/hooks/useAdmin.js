import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, SetIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-coral.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          SetIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
