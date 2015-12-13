
<div class="toc" style="min-height: 1813px;">
    <div class="ui vertical inverted sticky menu">
        <div class="item">
            <a href="{{ URL::route('dashboard.index') }}"><h2>{{ Setting::get('core::site-name') }}</h2></a>
        </div>

        <div class="item">
            <div class="ui middle aligned grid">
                <div class="six wide column">
                    <img class="ui tiny circular right spaced image" src="{{ $currentUser->profile->present()->avatar }}" id="sidebarUserProfilePicture">
                </div>
                <div class="ten wide column">
                    <span><b>{{$currentUser->present()->fullname}}</b></span>

                    @if(Setting::getBool('user::enable-profile') && $currentUser->hasAccess('user.profile.edit'))
                        <p><a href="{{route('backend::user.profile.show')}}" class="right floated star">
                            <i class="pencil icon"></i>
                            Edit
                        </a></p>
                    @endif

                </div>

            </div>
        </div>

        {!! $sidebar !!}

    </div>
</div>
