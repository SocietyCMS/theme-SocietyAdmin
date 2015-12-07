<div class="toc" style="min-height: 1813px;">
    <div class="ui vertical inverted sticky menu">
        <div class="item">
            <a href="{{ URL::route('dashboard.index') }}"><h2>{{ Setting::get('core::site-name') }}</h2></a>
        </div>

        <div class="item">
            <div class="ui middle aligned grid">
                <div class="six wide column">
                    <img class="ui tiny circular right spaced image" src="http://semantic-ui.com/images/avatar/large/elliot.jpg">
                </div>
                <div class="ten wide column">
                    <p><b>{{$currentUser->present()->fullname}}</b></p>
                </div>

            </div>
        </div>

        {!! $sidebar !!}

    </div>
</div>
