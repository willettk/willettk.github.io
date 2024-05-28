Title: Bike races
date: 2019-09-08
tags: bicycling

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
    <script type="text/javascript" src="extra/tablesort/src/tablesort.js"></script>
    <script src='extra/tablesort/src/sorts/tablesort.number.js'></script>
    <script src='extra/tablesort/src/sorts/tablesort.date.js'></script>

    <link href="extra/tablesort/demo/style.css" rel="stylesheet" type="text/css" />
    <link href="extra/tablesort/tablesort.css" rel="stylesheet" type="text/css" />
    <title>Race list</title>
    <meta name="description" content="race list results">
    </head>
<body>

<h4 align=center> Bike races </h4>
<table id="biketable" cellspacing=1 class="sort">
    <thead>
        <tr>
            <th data-sort-method="date"> Date </th>
            <th> Race </th>
            <th> Location  </th>
            <th data-sort-method="number"> Bike distance [mi] </th>
            <th data-sort-method="number"> Bike speed [mph]  </th>
            <th> Finish </th>
            <th data-sort-method="number" colspan=2> Overall placing  </th>
            <th data-sort-method="number" colspan=3> Division placing </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 9/8/19 </td>
            <td> <a href="https://bakerhillclimb.com/">Mt. Baker Hill Climb</a> </td>
            <td> Glacier, WA</td>
            <td> 22 </td>
            <td> 9.6 </td>
            <td><a href="https://www.strava.com/activities/2691627211" target="_blank">2:16:50</a></td>
            <td> 151</td><td> 258</td>
            <td> 33</td><td> 45</td><td>M 30-39</td>
        </tr>
    </tbody>
</table>

<script>
  new Tablesort(document.getElementById('biketable'));
</script>

</body>
</html>