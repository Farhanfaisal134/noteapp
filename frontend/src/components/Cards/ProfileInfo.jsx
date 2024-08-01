import React from "react"
import { getInitials } from "../../utils/helper"

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.username)}
      </div>

      <button
        className="text-sm bg-red-500 p-2 rounded-sm text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default ProfileInfo