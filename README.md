<style>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }

  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }

  .table tbody+tbody {
    border-top: 2px solid #dee2e6;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .table-hover tbody tr:hover {
    color: #212529;
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table-bordered {
    border: 1px solid #dee2e6;
  }

  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6;
  }

  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px;
  }

  .table-sm th,
  .table-sm td {
    padding: 0.3rem;
  }

  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive>.table-bordered {
    border: 0;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-secondary:hover {
    color: #fff;
    background-color: #565e64;
    border-color: #464c51;
  }

  .btn-success {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }

  .btn-success:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }

  .btn-info {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }

  .btn-info:hover {
    color: #000;
    background-color: #0b8390;
    border-color: #0a7a85;
  }

  .btn-warning {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }

  .btn-warning:hover {
    color: #000;
    background-color: #e0a800;
    border-color: #d39e00;
  }

  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #b21f2d;
  }

  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .btn-light:hover {
    color: #000;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }

  .btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }

  .btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1e2125;
  }

  .btn-link {
    font-weight: 400;
    color: #007bff;
    text-decoration: none;
  }

  .btn-link:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  .badge-primary {
    color: #fff;
    background-color: #007bff;
  }

  .badge-secondary {
    color: #fff;
    background-color: #6c757d;
  }

  .badge-success {
    color: #fff;
    background-color: #28a745;
  }

  .badge-danger {
    color: #fff;
    background-color: #dc3545;
  }

  .badge-warning {
    color: #000;
    background-color: #ffc107;
  }

  .badge-info {
    color: #000;
    background-color: #17a2b8;
  }

  .badge-light {
    color: #000;
    background-color: #f8f9fa;
  }

  .badge-dark {
    color: #fff;
    background-color: #343a40;
  }

  .badge-pill {
    border-radius: 1rem;
  }
</style>
<table class='table table-striped table-hover'>
  <thead>
    <td> Question number </td>
    <td> Question Title </td>
    <td> Difficulty </td>
  </thead>
  <tbody>
    <tr>
      <th> 1</th>
      <td> Two Sum</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 11</th>
      <td> Container With Most Water</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 12</th>
      <td> Integer to Roman</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 13</th>
      <td> Roman to Integer</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 136</th>
      <td> Single Number</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 137</th>
      <td> Single Number II</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 14</th>
      <td> Longest Common Prefix</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 143</th>
      <td> Reorder List</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 151</th>
      <td> Reverse Words in a String</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 153</th>
      <td> Find Minimum in Rotated Sorted Array</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 16</th>
      <td> 3Sum Closest</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 162</th>
      <td> Find Peak Element</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 164</th>
      <td> Maximum Gap</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 165</th>
      <td> Compare Version Numbers</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 17</th>
      <td> Letter Combinations of a Phone Number</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 187</th>
      <td> Repeated DNA Sequences</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 189</th>
      <td> Rotate Array</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 19</th>
      <td> Remove Nth Node From End of List</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 20</th>
      <td> Valid Parentheses</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 206</th>
      <td> Reverse Linked List</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 21</th>
      <td> Merge Two Sorted Lists</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 22</th>
      <td> Generate Parentheses</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 223</th>
      <td> Rectangle Area</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 23</th>
      <td> Merge k Sorted Lists</td>
      <td> <span class="badge text-bg-danger">Hard</span></td>
    </tr>
    <tr>
      <th> 238</th>
      <td> Product of Array Except Self</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 24</th>
      <td> Swap Nodes in Pairs</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 240</th>
      <td> Search a 2D Matrix II</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 242</th>
      <td> Valid Anagram</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 27</th>
      <td> Remove Element</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 28</th>
      <td> Find the Index of the First Occurrence in a String</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 283</th>
      <td> Move Zeroes</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 3</th>
      <td> Longest Substring Without Repeating Characters</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 31</th>
      <td> Next Permutation</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 34</th>
      <td> Find First and Last Position of Element in Sorted Array</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 35</th>
      <td> Search Insert Position</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 378</th>
      <td> Kth Smallest Element in a Sorted Matrix</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 4</th>
      <td> Median of Two Sorted Arrays</td>
      <td> <span class="badge text-bg-danger">Hard</span></td>
    </tr>
    <tr>
      <th> 41</th>
      <td> First Missing Positive</td>
      <td> <span class="badge text-bg-danger">Hard</span></td>
    </tr>
    <tr>
      <th> 442</th>
      <td> Find All Duplicates in an Array</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 48</th>
      <td> Rotate Image</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 49</th>
      <td> Group Anagrams</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 5</th>
      <td> Longest Palindromic Substring</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 500</th>
      <td> Keyboard Row</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 56</th>
      <td> Merge Intervals</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 57</th>
      <td> Insert Interval</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 58</th>
      <td> Length of Last Word</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 6</th>
      <td> Zigzag Conversion</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 61</th>
      <td> Rotate List</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 66</th>
      <td> Plus One</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 7</th>
      <td> Reverse Integer</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 71</th>
      <td> Simplify Path</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 73</th>
      <td> Set Matrix Zeroes</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 74</th>
      <td> Search a 2D Matrix</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 75</th>
      <td> Sort Colors</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 77</th>
      <td> Combinations</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 78</th>
      <td> Subsets</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 8</th>
      <td> String to Integer (atoi)</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 80</th>
      <td> Remove Duplicates from Sorted Array II</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 82</th>
      <td> Remove Duplicates from Sorted List II</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 83</th>
      <td> Remove Duplicates from Sorted List</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 86</th>
      <td> Partition List</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
    <tr>
      <th> 9</th>
      <td> Palindrome Number</td>
      <td> <span class="badge text-bg-success">Easy</span></td>
    </tr>
    <tr>
      <th> 92</th>
      <td> Reverse Linked List II</td>
      <td> <span class="badge text-bg-warning">Medium</span></td>
    </tr>
  </tbody>
</table>