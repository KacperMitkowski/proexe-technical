import axios, { AxiosError } from "axios";
import { useState } from "react";
import { User } from "../types";

export const useFacadeUserAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<any>(null);
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  async function getUsers() {
    setActionExecuting(true);
    try {
      const resp = await axios.get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
        // "https://my-json-server.typicode.com/sad/jsonplaceholderdb/data"
      );

      const arr = resp.data?.map((user: any) => ({
        ...user,
        city: user.address.city,
      }));

      setUsers(arr);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function createUser(user: any) {
    setActionExecuting(true);
    try {
      await axios.post("/api/users", user);
      setUsers([...users, user]);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteUser(id: string) {
    setActionExecuting(true);
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user: any) => user.id !== id));
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  return {
    users,
    error,
    actionExecuting,
    getUsers,
    createUser,
    deleteUser,
  };
};
