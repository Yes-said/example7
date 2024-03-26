import React from 'react'

const Sidebar = () => {
  return (
    <div>
<aside class="menu">
  <p class="menu-label">General</p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Manage results</a></li>
  </ul>
  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage students</a>
      <ul>
        <li><a>Add students</a></li>
        <li><a>Edit student information</a></li>
        <li><a>Delete student</a></li>
      </ul>
    </li>
    <li>
      <a class="is-active">Reports and analysis</a>
      <ul>
      <li><a>Generate reports</a></li>
      <li><a>Analytics dashboard</a></li>
      </ul>
      </li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">Course management</p>
  <ul class="menu-list">
    <li><a>Add course</a></li>
    <li><a>Edit course information</a></li>
    <li><a>Delete course</a></li>
  </ul>
  <p class="menu-label">Grade management</p>
  <ul class="menu-list">
    <li><a>Define grading system</a></li>
    <li><a>View grade distribution</a></li>
  </ul>
  <p class="menu-label">Class management</p>
  <ul class="menu-list">
  <li><a>Add class</a></li>
  <li><a>Edit class</a></li>
  <li><a>Delete class</a></li>
  </ul>
  <ul class="menu-list">
    <li><a>User management</a></li>
    <li><a>System settings</a></li>
  </ul>
  <p class="menu-label">Reports and analysis</p>
  <ul class="menu-list">
    <li><a>Generate reports</a></li>
    <li><a>Analytics dashboard</a></li>
  </ul>
  <p class="menu-label">Help & support</p>
  <ul class="menu-list">
    <li><a>FAQs</a></li>
    <li><a>Logout</a></li>
  </ul>
</aside>
    </div>
  )
}

export default Sidebar