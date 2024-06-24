<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" v-model="name" />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" placeholder="Age" v-model="age" />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input type="text" class="form-control" id="avatar" placeholder="avatar" v-model="avatar" />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="JavaScript" />
                JavaScript
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="Java" /> Java
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="PHP" /> PHP
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="Python" /> Python
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="C#" /> C#
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="programmingLanguage" value="C/C++" /> C/C++
                <i class="input-helper"></i></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Nam" v-model="gender" />
                Nam <i class="input-helper"></i></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Nữ" v-model="gender" />
                Nữ <i class="input-helper"></i></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Khác" v-model="gender" />
                Khác <i class="input-helper"></i></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="type">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea v-model="description" class="form-control" id="description" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-gradient-primary mr-2">
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      avatar: "",
      age: 0,
      description: "",
      programmingLanguage: [],
      gender: "Nam",
      type: "CLIENT",
    };
  },
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
