@extends('layouts.master')

@section('title')
    {{ trans('core::core.error404.error 404') }}
@endsection

@section('subTitle')
    {{ trans('core::core.error404.page not found') }}
@endsection

@section('content')

    <div class="ui two column centered grid">
        <div class="center aligned column">
            <img src="{!! Theme::url('/images/slant.png') !!}" class="ui centered small image">
            <h2 class="ui huge header">
                <div class="content">
                    {{ trans('core::core.error404.message') }}
                    <div class="sub header"><a href="{{ URL::route('dashboard.index') }}"> {{ trans('core::core.error404.back to dashboard') }}</a></div>
                </div>
            </h2>
            <div class="column">

            </div>
        </div>

    </div>

@endsection