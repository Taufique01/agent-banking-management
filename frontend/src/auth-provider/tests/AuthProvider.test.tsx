import { act, renderHook, RenderResult } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { AuthProvider, useAuthentication } from '../AuthProvider'

describe('AuthProvider', () => {
  const wrapper = ({ children }: { children: ReactNode }) => <AuthProvider> {children} </AuthProvider>
  let result: RenderResult<{ setToken: (p: (string)) => void; isLoggedIn: boolean; token: string | undefined, logout: () => void }>;

  describe('when authentication value is initialized for the first time', () => {
    describe('when there is NO token saved in the local storage', function () {
      beforeEach(function () {
        ({ result } = renderHook(() => useAuthentication(), { wrapper }));
      });

      it('returns undefined value', () => {
        expect(result.current.token).toBeUndefined()
      });

      it('returns isLoggedInFalse', function () {
        expect(result.current.isLoggedIn).toBe(false)
      });
    });

    describe('when there is a token saved in the local storage', function () {
      beforeEach(() => {
        localStorage.setItem("token", "some-token");
        ({ result } = renderHook(() => useAuthentication(), { wrapper }));
      });

      it('returns the value from storage', () => {
        expect(result.current.token).toBe('some-token')
      });
    });
  });

  describe('when a token is set to the authentication', function () {
    beforeEach(function () {
      ({ result } = renderHook(() => useAuthentication(), { wrapper }));

      act(() => {
        result.current.setToken('test-token-value')
      })
    });

    it('returns the token value', function () {
      expect(result.current.token).toBe('test-token-value')
    });

    it('returns isLoggedInTrue', function () {
      expect(result.current.isLoggedIn).toBe(true)
    });

    it('sets the token to localStorage', function () {
      const tokenFromStorage = localStorage.getItem('token');
      expect(tokenFromStorage).toBe('test-token-value')
    });
  });

  describe('when a token is set to the authentication from a different places', function () {
    it('returns the token value globally', () => {
      const useTestAuth = () => {
        const useAuthentication1 = useAuthentication();
        const useAuthentication2 = useAuthentication();

        return { useAuthentication1, useAuthentication2 }
      }

      const { result } = renderHook(() => useTestAuth(), { wrapper });

      act(() => {
        result.current.useAuthentication1.setToken('test-token-value-from-place-1')
      })

      expect(result.current.useAuthentication2.token).toBe('test-token-value-from-place-1')
    });
  });

  describe('when logout is called', () => {
    beforeEach(function () {
      ({ result } = renderHook(() => useAuthentication(), { wrapper }));

      act(() => {
        result.current.setToken("test_token");
        result.current.logout();
      })
    });

    it("removes the current token from local storage", () => {
      const tokenFromStorage = localStorage.getItem('token');
      expect(tokenFromStorage).toBeNull();
    });

    it('returns isLoggedIn false', function () {
      expect(result.current.isLoggedIn).toBe(false)
    });

  })
});
