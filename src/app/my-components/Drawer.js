import React from 'react'

export default function Drawer() {
  return (
    <>
    <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        {/* Page content here */}asdasdasd
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}asdasdsfrg
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}
