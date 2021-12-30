import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import * as reactAlert from "react-alert";
import { LoginForm } from "../LoginForm";
import * as authClient from "../authClient";
import * as authProvider from "../../../auth-provider/AuthProvider";
import { Status, useLoginPost, LoginType } from "../authClient";
import { changeInputValue } from "../../../testHelper/componentHelper";

describe("Login", () => {
  describe("when login page renders", () => {
    let mockAlertError: jest.Mock;
    let mockSetToken: jest.Mock;

    beforeEach(() => {
      mockAlertError = jest.fn();
      mockSetToken = jest.fn();

      jest.spyOn(authClient, "useLoginPost");
      jest.spyOn(authProvider, "useAuthentication").mockReturnValue({
        setToken: mockSetToken,
        token: undefined,
        isLoggedIn: false,
        logout: ()=>{}
      })

      jest.spyOn(reactAlert, "useAlert").mockReturnValue({
        error: mockAlertError,
      } as unknown as reactAlert.AlertManager);
    });

    describe("when user clicks the login button", () => {
      let mockSetLogin: jest.Mock;
      const subject = (login: LoginType | undefined = undefined) => {
        mockSetLogin = jest.fn();
        const mockHookHandler = { setLogin: mockSetLogin };
        (useLoginPost as jest.Mock).mockReturnValue(mockHookHandler);
        render(
          <MemoryRouter>
            <LoginForm />
          </MemoryRouter>
        );
        login &&
          changeInputValue(screen.getByPlaceholderText("Email"), login.email);
        login &&
          changeInputValue(
            screen.getByPlaceholderText("Password"),
            login.password
          );
        fireEvent.click(screen.getByText("Login"));
      };

      describe("When Email Field is empty", () => {
        let loginDetails: LoginType;
        beforeEach(() => {
          loginDetails = { email: "", password: "password" };
          subject(loginDetails);
        });

        it("Does NOT send email and password to the client", () => {
          expect(mockSetLogin).not.toBeCalledWith(loginDetails);
        });

        it('shows an alert "Incorrect email or password." to the user', () => {
          expect(mockAlertError).toBeCalledWith("Incorrect email or password.");
        });
      });

      describe("When Password Field is empty", () => {
        let loginDetails: LoginType;
        beforeEach(() => {
          loginDetails = { email: "abc@mail.com", password: "" };
          subject(loginDetails);
        });

        it("Does NOT send email and password to the client", () => {
          expect(mockSetLogin).not.toBeCalledWith(loginDetails);
        });

        it('shows an alert "Incorrect email or password." to the user', () => {
          expect(mockAlertError).toBeCalledWith("Incorrect email or password.");
        });
      });

      describe("when the email field and password field is NOT empty", () => {
        it("sends the email and password to the client", () => {
          let loginDetails = { email: "abc@mail.com", password: "password" };
          subject(loginDetails);
          expect(mockSetLogin).toBeCalledWith(loginDetails);
        });
      });
    });

    describe("auth client's status is Success", () => {
      let history: MemoryHistory;

      beforeEach(() => {
        (useLoginPost as jest.Mock).mockReturnValue({
          status: Status.Success,
          token: "Sample_token2"
        });

        history = createMemoryHistory();
        render(
          <Router history={history}>
            <LoginForm />
          </Router>
        );
      });

      it('sets the token to authProvider',  ()=> {
        expect(mockSetToken).toBeCalledWith("Sample_token2")
      });

      it("redirects user to /create-menu", () => {
        expect(history.location.pathname).toBe("/menu");
      });
    });

    describe("when auth client's status is error", () => {
      let history: MemoryHistory;
      beforeEach(() => {
        (useLoginPost as jest.Mock).mockReturnValue({
          status: Status.Error,
        });
        history = createMemoryHistory();

        render(
          <Router history={history}>
            <LoginForm />
          </Router>
        );
      });

      it("does NOT redirect user", () => {
        expect(history.location.pathname).toBe("/");
      });

      it('shows an alert "Request Failed" to the user', () => {
        expect(mockAlertError).toBeCalledWith("Request Failed");
      });
    });

    describe("when auth client's status is bad request", () => {
      let history: MemoryHistory;
      beforeEach(() => {
        (useLoginPost as jest.Mock).mockReturnValue({
          status: Status.AuthError,
        });
        history = createMemoryHistory();

        render(
          <Router history={history}>
            <LoginForm />
          </Router>
        );
      });

      it("does NOT redirect user", () => {
        expect(history.location.pathname).toBe("/");
      });

      it('shows an alert "Incorrect Email or Password" to the user', () => {
        expect(mockAlertError).toBeCalledWith("Incorrect Email or Password");
      });
    });
  });
});
