import React from 'react'

const Box = () => {
  return (
    <div>
<form class="box">
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="Name" placeholder="e.g John Obote" />

      <div class="field">
    <label class="label">Admission number</label>
    <div class="control">
      <input class="input" type="number" placeholder="e.g. 11120" />
    </div>
  </div>
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="e.g. johnobote@gmail.com" />
    </div>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="password" placeholder="********" />
    </div>
  </div>
</form>
<button class="button is-primary">submit</button>
    </div>
  )
}

export default Box