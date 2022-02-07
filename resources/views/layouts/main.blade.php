<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link href="{{ asset('css/app.css?v=').time() }}" rel="stylesheet">
  {{-- <link href="{{ asset('fontawesome/css/all.min.css') }}" rel="stylesheet">
  <link href="{{ asset('fontawesome/css/fontawesome.min.css') }}" rel="stylesheet"> --}}
  <title>@yield('title')</title>
</head>
<body class="bg-gray-100">


    @yield('content')
    {{-- scripts --}}
    <script src="{{ asset('js/main.js?v=').time() }}"></script>
</body>
</html>
