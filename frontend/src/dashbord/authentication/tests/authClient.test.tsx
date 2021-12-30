import { renderHook, RenderResult } from "@testing-library/react-hooks";
import { flushPromises } from "../../../testHelper/asyncHelper";
import { mockPostBadRequest, mockPostRequestSuccess, mockServerRequestFail } from "../../../testHelper/fetchRequest";
import { waitFor } from "@testing-library/react";
import { Status, useLoginPost } from "../authClient";

describe('client', () => {
  describe('When initialized first time', () => {
    it('returns the initial status to NotStarted', async () => {
      const { result } = renderHook(() => useLoginPost());

      await waitFor(() => {
        expect(result.current.status).toBe(Status.NotStarted)
      });
    });

    it('returns the initial token to undefined', async ()=>{
      const { result } = renderHook(() => useLoginPost());

      await waitFor(() =>{
        expect(result.current.token).toBeUndefined();
      });
    });
  });

  describe('when the post request fail to /login', () => {
   
    it('returns the status Error', async () => {
      mockServerRequestFail('/api/auth/login/', { email: 'abc@orderit.today', password: "abc123" })

      const { result } = renderHook(() => useLoginPost());
      result.current.setLogin({ email: 'abc@orderit.today', password: "abc123" });
      
      await waitFor(() => {
        expect(result.current.status).toBe(Status.Error)
      });
    });
    
    it('returns the token undefined', async ()=>{
      mockServerRequestFail('/api/auth/login/', { email: 'abc@orderit.today', password: "abc123" })

      const { result } = renderHook(() => useLoginPost());
      result.current.setLogin({ email: 'abc@orderit.today', password: "abc123" });
      

      await waitFor(() => {
        expect(result.current.token).toBeUndefined();
      });
    });
  });

  describe('when the post request fail due to wrong credentials', () => {
    it('returns the status AuthError', async () => {
      mockPostBadRequest('/api/auth/login/', { email: 'bad@orderit.today', password: "badpassword" })

      const { result } = renderHook(() => useLoginPost());
      result.current.setLogin({ email: 'bad@orderit.today', password: "badpassword" })

      await flushPromises()

      await waitFor(() => {
        expect(result.current.status).toBe(Status.AuthError)
      });
    });
    it('returns the token undefined', async () => {
      mockPostBadRequest('/api/auth/login/', { email: 'bad@orderit.today', password: "badpassword" })

      const { result } = renderHook(() => useLoginPost());
      result.current.setLogin({ email: 'bad@orderit.today', password: "badpassword" })

      await flushPromises()

      await waitFor(() => {
        expect(result.current.token).toBeUndefined();
      });
    });
  });

  describe('when the post request success to login', () => {
    it('returns the status Success', async () => {
      let result: RenderResult<{
        setLogin: (payload: { email: string, password: string }) => void;
        status: Status
      }>;
      const requestBody = {
        email: "email@mail.com", password: "123456"
      };
      const responseBody = {};
      mockPostRequestSuccess('/api/auth/login/', requestBody, responseBody);

      ({ result } = renderHook(() => useLoginPost()));

      result.current.setLogin({
        email: "email@mail.com", password: "123456"
      })
      await waitFor(() => {
        expect(result.current.status).toBe(Status.Success)
      });
    });

    it('returns the correct token', async () => {
      let result: RenderResult<{
        setLogin: (payload: { email: string, password: string }) => void;
        status: Status,
        token: any
      }>;
      const requestBody = {
        email: "email@mail.com", password: "123456"
      };
      const responseBody = {key:"This_is_a_token"};
      mockPostRequestSuccess('/api/auth/login/', requestBody, responseBody);

      ({ result } = renderHook(() => useLoginPost()));

      result.current.setLogin({
        email: "email@mail.com", password: "123456"
      })
      await waitFor(() => {
        expect(result.current.token).toBe(responseBody.key);
      });
    });
  });
});
