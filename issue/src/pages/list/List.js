import Pagination from "pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "reducer/issueSlice";
import styled from "styled-components";

function IssueList() {
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const dispatch = useDispatch();

  const issues = useSelector((state) => {
    return state.getIssue.issues;
  });

  useEffect(() => {
    dispatch(getIssue());
  }, [dispatch]);

  console.log(issues);

  return (
    <Layout>
      <header>
        <h1>IssueList</h1>
      </header>

      <label>
        페이지 당 표시할 게시물: &nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </label>

      <main>
        {issues.slice(offset, offset + limit).map((user) => (
          <div>#{user.number}</div>
        ))}
      </main>

      <footer>
        <Pagination
          total={issues.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export default IssueList;
