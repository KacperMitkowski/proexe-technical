import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SortingHelper } from "../helpers";
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
      // await axios.post("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data", user);
      const sortedUsers = [...users].sort(SortingHelper.compareById);
      const fakeNewId = (sortedUsers.at(-1)?.id || 0) + 1;

      setUsers([...users, { ...user, id: fakeNewId }]);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function editUser(user: User) {
    setActionExecuting(true);
    try {
      // await axios.put("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data", user);

      const newUsers = [...users];
      const objIndex = users.findIndex((obj) => obj.id === user.id);
      newUsers[objIndex] = user;

      setUsers(newUsers);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteUser(id: string) {
    setActionExecuting(true);
    try {
      // await axios.delete("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data", id);
      setUsers(users.filter((user: any) => user.id !== id));
    } catch (error) {
      const err = error as AxiosError;
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
    editUser,
    deleteUser,
  };
};
