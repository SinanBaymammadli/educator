import reducers from "./rootReducer";

test("reducers", () => {
  const state = reducers(
    {
      form: {
        register: {
          registeredFields: {
            name: { name: "name", type: "Field", count: 1 },
            email: { name: "email", type: "Field", count: 1 },
            password: { name: "password", type: "Field", count: 1 },
            confirmPassword: {
              name: "confirmPassword",
              type: "Field",
              count: 0
            }
          },
          syncErrors: {
            name: "This field is required.",
            email: "This field is required.",
            password: "This field is required.",
            confirmPassword: "This field is required."
          }
        }
      }
    },
    {
      type: "@@redux-form/REGISTER_FIELD",
      meta: { form: "register" },
      payload: { name: "confirmPassword", type: "Field" }
    }
  );
  expect(state).toEqual({
    form: {
      register: {
        registeredFields: {
          name: { name: "name", type: "Field", count: 1 },
          email: { name: "email", type: "Field", count: 1 },
          password: { name: "password", type: "Field", count: 1 },
          confirmPassword: { name: "confirmPassword", type: "Field", count: 1 }
        },
        syncErrors: {
          name: "This field is required.",
          email: "This field is required.",
          password: "This field is required.",
          confirmPassword: "This field is required."
        }
      }
    }
  });
});
